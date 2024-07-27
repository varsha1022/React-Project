import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false);

    const buttonWidth = subscribed ? "30%" : "27%";

    function subscribe() {
        setSubscribed(!subscribed);
    }

    return (
        <>
            <div className="container">
                <h1>Welcome</h1>
                <h3>Thank you! Happy Learning</h3>
                <button style={{ width: buttonWidth }} onClick={subscribe}>
                    {subscribed ? "Subscribed" : "Subscribe"}
                </button>
            </div>
        </>
    );
};

export default Subscribe;
//import {useState} from "react"

// const Welcome=()=>{

//     const [subscribe,setSubscribe] = useState(false)


//     const handleSubscribe=()=>{
//         setSubscribe(!subscribe)
//     }
    
//     return(
//         <div className="bg-indigo-950  gap-5 rounded text-center p-32 mr-32 w-5/12 mt-28 ml-96 flex justify-center items-center flex-col">
//             <h1 className="text-yellow-500 mb-2 text-5xl font-bold ">Welcome</h1>
//             <p className="text-lg text-white">Thank You ! Happy Learning</p>
//             <button onClick={handleSubscribe} className="border-2 cursor-pointer p-1 rounded bg-white text-blue-950">{subscribe ? "Subscribed" :" subscribe"}</button>
//         </div>
//     )
// }
// export default Welcome; 