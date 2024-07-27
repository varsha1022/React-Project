import {useState} from 'react'

const UseState2 = () =>{

    const [count,setCount] = useState(0)


    return (

        <div>
            <h1>useState () Hook</h1>
            <div>
                <h1>Counter</h1>
                <p>{count}</p>
                <button onClick={()=>setCount((prevState)=>prevState+1)}>Increment</button>
                <button onClick={()=> setCount(count-1)}>Decrement</button>
                <button onClick={()=> setCount(0)}>Reset</button>

            </div>
        </div>
    )
}
export default UseState2