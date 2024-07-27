import {useState} from "react";

const ShowHide = ()=>{

    const [firstName,setFirstName] =useState(false)
    const [lastName,setLastName] =useState(false)


    const ShowHideFirstName=()=>{
        setFirstName(!firstName)
    }

    const ShowHideLastName=()=>{
        setLastName(!lastName)
    }

    const showHide={
        display:firstName ? "block" : "none",

    }
    const showHide1={
        display:lastName ? "block" : "none"

    }

    return(
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... " style={{height:"100vh"}}>
    {/* // <div style={{backgroundColor:"pink",height:"100vh", margin:0}}> */}
        <h1 className="text-3xl font-bold text-center flex justify-center items-center mb-2 ">Show/Hide</h1>
        
        <div style={{display:"flex" ,flexDirection:"row"}}>
        <div>
        <button className="rounded bg-pink-400 text-center text-white mt-20 ml-40 h-12" onClick={ShowHideFirstName}>Show/Hide FirstName</button>
        <div style={showHide} className="bg-white h-20 w-40 rounded mt-8 ml-40 text-center pt-6 text-2xl" >Joe</div>
        </div>
        
        <div>
        <button className="rounded bg-pink-400 text-center text-white mt-20 ml-60  h-12" onClick={ShowHideLastName}>Show/Hide LastName</button>
        
        <div style={showHide1} className="bg-white h-20 w-40 rounded mt-8 ml-60 text-center pt-6 text-2xl" >Jonas</div>
        </div>
        </div>
    </div>
        
    )
}
export default ShowHide

// import {useState} from "react"


// const ShowHide=()=>{

//     const [toggleFirstname,setToggleFirstName] = useState(true)
    
//     const handleFirstname=()=>{
//             setToggleFirstName(!toggleFirstname)
//     }

//     const [toggleLastname,setToggleLastName] = useState(true)
    
//     const handleLastname=(event)=>{
//         event.preventDefault();
//             setToggleLastName(!toggleLastname)
//     }
//     const styleFirstName = {display:toggleFirstname?"none":"block",}
//     const styleLastName = {display:toggleLastname?"none":"block",}



//     return(
//         <div className="p-20 border-2 border-pink-200 w-6/12 mt-14 ml-80 rounded  bg-gradient-to-r from-rose-500 from-20% via-rose-600 via-40% to-pink-500 to-90%" style={{ height: "540px" }} >
//         <h1 className="text-center mb-8 mt-0 text-4xl font-bold text-white ">Show/Hide</h1>
//         <div className="flex  gap-20 mb-">
//         <div className="mt-12 text-center gap-20 flex flex-wrap flex-col w-6/12">
//             <button className="bg-white rounded font-semibold outline-none h-14 cursor-pointer " onClick={handleFirstname}>Show/Hide FirstName</button>
//             <div style={styleFirstName} className="bg-white p-10 rounded text-center font-semibold text-xl">John</div>
//         </div>
//         <div className="mt-12 text-center gap-20 flex flex-wrap flex-col w-6/12">
//             <button className="bg-white rounded  font-semibold outline-none h-14 cursor-pointer" onClick={handleLastname}>Show/Hide Last Name</button>
//             <div style={styleLastName} className="bg-white p-10 rounded text-center font-semibold text-xl">Doe</div>
//         </div>
//         </div>
        
//         </div>
//     )
// }
// export default ShowHide;