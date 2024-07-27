import {useState} from "react"
const ChangeMode =() =>{

    const [lightMode,setLightMode] = useState(false)
    const [text,setText] =useState(true)

    const  ChangeLightMode =(event)=>{
        setLightMode(!lightMode)
        setText(!text)
    }
    const style = {
        backgroundColor:lightMode ? "white" : "black",
        color:lightMode ? "black" : "white",
    }

        return(
        <div style={style}>
            <h1 className="text-2xl">Click to Change Mode</h1>
            <button className="border-6 rounded bg-white h-10 w-40 text-black mt-4 outline-none cursor-pointer" onClick={ChangeLightMode}  id="darkBtn"> 
            {text?"light Mode":"Dark Mode"}</button>        
        </div>

    )
}
export default ChangeMode