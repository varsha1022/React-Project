import {useState} from "react"
import UseMemoDec from "./UseMemoDec.jsx"

const UseMemoInc=()=>{

    const [count,setCount] = useState(0)

    const handleCount=()=>{
        setCount(count+1)
    }
    console.log("From Increment");

    return(
        <div>
        <h1 className="text-left text-3xl font-bold m-5">Use Memo Hook</h1>
        <button onClick={handleCount} className="border-2 p-2 m-4 rounded cursor-pointer">Increment {count}</button>
        <UseMemoDec/>
        </div>
    )
}
export default UseMemoInc;