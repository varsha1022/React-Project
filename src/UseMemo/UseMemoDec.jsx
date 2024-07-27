import {useState,useMemo} from "react"
import React from "react" 

const UseMemoDec=()=>{

    const [count,setCount] = useState(0)

    const handleCount=()=>{
        setCount(count-1)
    }
    console.log("From Decrement");

    return(
        <div>
        <button onClick={handleCount} className="border-2 p-2 m-4 rounded cursor-pointer">Decrement {count}</button>
        </div>
    )
}
export default React.memo(UseMemoDec);
// use memo is a higher order component
// only to avoid the re renderings we use usememo hook not side effects
// i added the React.memo(useMemoDec) at the last 