import React,{createContext} from "react"
import Parent from "./Parent.jsx"


const data={
    name:"Varsha",
    age:21,
    gender:"Female"
}

export const MyData = createContext()


const UseContext =()=>{
    return(
        <div>
            <h1 className="text-red-500">UseContext() Hook</h1>
            <MyData.Provider value={data}>
                <Parent/>
            </MyData.Provider>
        </div>
    )
}

export default UseContext;