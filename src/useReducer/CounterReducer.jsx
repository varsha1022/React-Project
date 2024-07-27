import React ,{useReducer,useState} from "react"

const reducer=(initialState,action)=>{
    if(action.type === "Increment"){
        return initialState +1;
    }else if(action.type==="Decrement"){
        return initialState-1;
    }else if(action.type==="Reset"){
        return initialState=0
    }else if(action.type==="Add 10"){
        return initialState+action.payload
    }else{
        return initialState
    }

    
}

const CounterReducer=()=>{

        // const [initialState,dispatch] = useReducer(reducer,state)
        // reducer:
        // syntax:const reducer=(state,action)=>{
            // conditions
        // }
        // dispatch:always takes an argument as in the form of objects. it contains keys as type and payload inthe conventional way
        // syntax: dispatch({type:"increment",payload:"1"})//payload is optional//increment+1

    const[count,dispatch] = useReducer(reducer,0);

    // const handleCount=()=>{
    //     return setCount(count+1)
    // }


    const handleIncrement=()=>{
        dispatch({type:"Increment"})
    }
    const handleDecrement=()=>{
        dispatch({type:"Decrement"})
    }
    const handleReset=()=>{
        dispatch({type:"Reset"})
    }
    const handleAddTen=()=>{
        dispatch({type:"Add 10",payload:10})
    }

    return (
        <div>
            <h1>UseReducer Hook</h1>
            <h2>Count:{count}</h2>
            <div className="flex  gap-8 mt-2">
            <button  onClick={handleIncrement} className="border-[2px] rounded  h-6 w-16 "> Incre</button>
            <button  onClick={handleDecrement}className="border-[2px] rounded  h-6 w-16 "> Decre</button>
            <button  onClick={handleReset}className="border-[2px] rounded  h-6 w-16 "> Reset</button>
            <button  onClick={handleAddTen}className="border-[2px] rounded  h-6 w-16 "> Add 10</button>
            </div>
        </div>
    )
}
export default CounterReducer