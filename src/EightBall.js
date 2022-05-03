import React,{ useState }  from 'react';
import "./EightBall.css"
const EightBall=(props)=>{
    let randomIdx=Math.floor(Math.random()*props.answers.length)
    const getRandomMsg=(props)=>{
        return props.answers[randomIdx]['msg']
    }

    const getColor=(props)=>{
        return props.answers[randomIdx]['color']
    }
    const handleClick=()=>{
        setMsg(getRandomMsg(props))
        setColor(getColor(props))
    }
    const [color, setColor] = useState("black");
    const[msg,setMsg]=useState("Think of a Question")
    return (
    <div className="Ball">
        <p className="Ball-body" style={{backgroundColor: color}}>{msg}</p>
        <button className="Ball-button" onClick={handleClick}> Tell Me </button>
    </div>
    )
    

}

export default EightBall