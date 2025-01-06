import Why from"./why.jsx"

export default function Incorect(props){
    return(
        <>
            /* 

            space for animation with rive
            
            */
            <h2>Špatně!</h2>
            <p>Správná odpověď:</p>
            <div>
                <span>{props.letter}</span>
                {props.answer}
            </div>
            <div>
                <button onClick={()=> <Why exampleNumber={props.exampleNumber}/>}>Vysvětlení</button>
                <button>Další</button>                
            </div>

        </>
    )
}