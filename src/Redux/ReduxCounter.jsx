import React from "react"
import {useSelector,useDispatch} from "react-redux";
import {Actions} from './ReduxCounterStore'

const ReduxCounter =()=>{

    const counterValue=useSelector(state=>state);
    // const counter=useSelector(x=>x);
    // console.log(counter);


    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch({type:Actions.increment});
    }
    const handleDecrement=()=>{
        dispatch({type:Actions.decrement});
    }
    const handleReset=()=>{
        dispatch({type:Actions.reset});
    }

    return(
        <div>
            <h1 className="text-center">Counter:{counterValue}</h1>
            <div className="flex  gap-8 mt-2 justify-center align-center">
            <button onClick={handleIncrement} className="border-[2px] rounded  h-8 w-16 "> Incre</button>
            <button onClick={handleDecrement} className="border-[2px] rounded  h-8 w-16 "> Decre</button>
            <button onClick={handleReset} className="border-[2px] rounded  h-8 w-16 "> Reset</button>
            </div>

        </div>
    )
}
export default ReduxCounter