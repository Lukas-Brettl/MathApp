import { useState, useEffect } from "react";


export default function Chytak({ data, next }) {

  const [modal, setModal] = useState()
  let result = []
 
  function equal(item){
    try{
      if(item == result[0]){
        console.log("spravne")
        next(3)
      }
      else{
        console.log("spatne")
        setModal(
        <div  className="fixed m-0 w-full h-full bg-slate-400">
            <h2>Správná odpověď:</h2>
            <div>
              {result[1]}
              {result[0]}
            </div>
            <div className="flex gap-9">
              <button onClick={() => next(0, 2)}>Vysvětlení</button>
              <button onClick={() => next(3)}>Další</button>
            </div>
        </div>)
      }
    }
    catch{
      console.log("meh")
      
    }
    
    

  }

  function write() {
    const entries = Object.entries(data.obsah["Chyták"]);
    let result_ = []
    let i = 0
    let div1 = []
    let div2 = []
    
    for (let [key, value] of entries) {

        switch(value[0]){
        case "zadani":
            result_.push(<h3 key={i}>{value[1]}</h3>)
            break
        case "reseni":
          result.push(value[1])
          result.push(value[2])
          break
        case "odpoved":

          div1.length <2 ? div1.push(value[1]): div2.push(value[1])
          
          if(div1.length == 2 && div2.length == 2){
            result_.push(
              <div key={i}>
              
                <div>{div1.map((item,index) => <button onClick={() => equal(item)} key={index}>{item}</button>)}</div>
                <div>{div2.map((item,index) => <button onClick={() => equal(item)} key={index}>{item}</button>)}</div>
              
              </div>)
            
          }
          break  
        case "napoveda":
            result_.push(<div key={i}>
                <button>?</button>
                <div>{value[1]}</div>
            </div>)
            
            break
    
        }
        i++
      
    }
    return result_ 
    
  }

  return (
    <div className=" p-12">
      {modal&&modal}
      <h1 className="text-2xl mb-3">{data["téma"]}</h1>

      {write()}
      
    </div>
  );
  }
  