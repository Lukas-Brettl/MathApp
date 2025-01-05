import "../pagesCss/App.css"
import Login from "./Login.jsx"
import Mainapp from "./Mainapp.jsx"
import Lesson from "./Lesson.jsx"
import {useState} from "react"

export default function App(){
  console.log("app.jsx")
  const [data, setData] = useState()

  function start(item, tema){
    setData({item, tema})
  
  }
  return(
    <div>
      
      {data? <Lesson item={data.item} tema={data.tema}/>: (localStorage.getItem("jmeno") !== ""? <Mainapp start={start}/>:<Login/>) }

    </div>
  )
}