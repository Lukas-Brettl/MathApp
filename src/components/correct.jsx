
export default function Correct(props){
    return(
        <>
            /* 

            space for animation with rive
            
            */

            <h2>Správně!</h2>
            <div>
                <span>{props.letter}</span>
                {props.answer}
            </div>
        </>
    )
}