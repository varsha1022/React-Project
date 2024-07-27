import React ,{useContext} from "react"
import {MyData} from "./UseContext.jsx"


const GrandChild=()=>{
    const person = useContext(MyData)
    console.log(person);
    return(
        <div>
            <h1>GrandChild Component</h1>
            <p className="text-red-500 font-bold text-2xl">{person.name}</p>
        </div>
    )
}
export default GrandChild;