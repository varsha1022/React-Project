 import React,{useState} from "react"
import { LuLoader2 } from "react-icons/lu";


const Icons=()=>{

    const [isLoading,setloading] = useState(true)

    const handleLoading =(event)=>{
        setLoading(!isLoading)
    }


    return(
        <div>
            <h1>Loading</h1>
            {isLoading ? (
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 94 74">
            <LuLoader2  className="text-5xl text-blue-400"/>
        </svg>
      ) : false}

            {/* <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <LuLoader2  className="text-5xl text-blue-400"/>
            </svg> */}

        </div>
    )
}
export default Icons