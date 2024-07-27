// import {useState} from 'react'

// const UseState1 = () =>{

//     const [count,setCount] = useState(0)

//     const onIncrement =()=>{
//         console.log("it is incremented");
//         setCount((prevState)=>{  return prevState+1})
//     }
//     const onDecrement =()=>{
//         console.log("it is decremented");
//         setCount((prevState)=>{  return prevState-1})
//     }
//     const reset =()=>{
//         console.log("Reset");
//         setCount((prevState)=>{  return 0})
//     }
//     return (

//         <div>
//             <h1>useState () Hook</h1>
//             <div>
//                 <h1>Counter</h1>
//                 <p>{count}</p>
//                 <button onClick={onIncrement}>Increment</button>
//                 <button onClick={onDecrement}>Decrement</button>
//                 <button onClick={reset}>Reset</button>

//             </div>
//         </div>
//     )
// }
// export default UseState1