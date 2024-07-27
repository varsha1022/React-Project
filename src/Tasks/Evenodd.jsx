import {useState} from "react"



const EvenOdd=()=>{


    const [count,setCount] =useState(0)
    const [even,setEven] =useState(false)

    const handleCount=()=>{
        const randomNumber = Math.floor(Math.random()*101);
       
        setCount(count + randomNumber);
        setEven((count + randomNumber) %2 ===0);

    };

    

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxSizing:"borderBox"}}
        className="border rounded mt-40 p-10 ml-40 mr-40 
        bg-gradient-to-b from-red-500 via-red-400 to-blue-300
        ">
            <h1 className="text-3xl font-bold">Count {count}</h1>
            <br />
            <div style={{fontSize:"1.4rem",fontWeight:"500"}}>
                <p>Count is {even ?"even":"odd"}</p>
            </div>
            <div className="mt-2 mb-2">
                <button className="border-black pl-2 pr-2 h-8 m-2 rounded bg-white"
                onClick={handleCount} 
                >
                    Increment
                </button>
            </div>
            <p style={{fontSize:"0.7rem"}}>*Increase By Rando Number Between 0 to 100</p>
        </div>
    )
}
export default EvenOdd
// import {useState} from "react"

// const EvenOdd =()=>{
//     const[count,setCount] = useState(0)
//     const [countType,setCountType] = useState("Even")

//     const handleCount=()=>{
//         const randomNum = Math.floor(Math.random() * 101) - 50;
//         const newCount = count + randomNum;
       
//         setCount(newCount)
//         handleType(newCount)
//         }

//     const handleType=(newCount)=>{
//     if( newCount % 2 === 0){
//         setCountType("Even")
//     }else{
//         setCountType("Odd")

//     }
//     }
//     return(
//         <div className="fixed ml-96 text-center w-5/12 rounded mt-32  mr-80 pt-28 bg-gradient-to-b from-pink-600 via-pink-300 to-blue-200" style={{height:"400px"}}>
//             <h1 className="text-4xl font-bold">Count {count} </h1>
//             <br />
//             <p className="font-semibold">Count is {countType} </p>
//             <br />
//             <button onClick={handleCount} className="rounded  bg-white outline-none p-1.5 w-32 mb-5 h-10 cursor-pointer">Increment</button>
//             <p className="text-sm">* Increase By random number Between 0 to 100</p>
//         </div>
//     )
// }
// export default EvenOdd;