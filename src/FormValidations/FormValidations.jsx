import {useState} from "react"

const FormValidations =() =>{

   const [userName,setUserName] = useState('')

   const [password,setPassword] = useState("")
   
   const[ userNameError,setUserNameError] = useState(false)
   
   const [passwordError,setPasswordError] = useState(false)
   
   const [isLogged,setIsLogged] = useState(false)

    // const [formData,setFormData] = useState({
    //     userName:"",
    //     userNameError:false,
    //     password:"",
    //     passwordError:false,
    //     isLogged:false,
    // })

   const handleUserName=(event)=>{
    setUserName(event.target.value);
   }
//    console.log(userName)

 const handlePassword=(event) =>{
    setPassword(event.target.value)
 }
// console.log(password)

    const handleBlurUserName=(event)=>{

        // using if else
        
        // if(userName === ""){
        //     // console.log("User Name is empty");
        //     setUserNameError(true)
        // } else{
        //     // console.log("user name is Filled");
        //     setUserNameError(false)
        
        // }

        (userName==="")?(setUserNameError(true)):(setUserNameError(false))//using ternary operator


    }
    // handleBlurUserName ? (if(userName==="")setUserNameError(true)) :setUserNameError(false)

    const handleBlurPassword=(event)=>{
        if(password === ""){
            // console.log("password empty")
            setPasswordError(true)
        }else{
            // console.log("password filled");
            setPasswordError(false)
        }
    }

    
    const handleSubmit =(event) =>{
        event.preventDefault();
            if(userName !== "" && password !== ""){
                setUserNameError(false);
                setPasswordError(false);
                setIsLogged(true)
                
            }else if(userName === "" && password === ""){
                setUserNameError(true);
                setPasswordError(true);
                setIsLogged(false)
                
            }else if(userName !== ""){
                setUserNameError(false);
                setIsLogged(false)
            }else if(password !== ""){
                setUserNameError(false);
                setIsLogged(false)
            } 
    
        }

    return(
         <div>
            <h1 className="font-bold text-3xl text-blue-500 text-center pt-5">Form Validations</h1>
            <form onSubmit={handleSubmit} className="text-center bg-pink-300 ml-20 mr-20 mt-10  h-90 pt-10 pb-10" >
                <div>
                <label htmlFor="userName">Username:</label>
                <input type="text" 
                name="userName"
                id="userName" 
                className="border-2-none rounded-md ml-2 mt-4 pl-20 h-8" placeholder="User Name"
                value={userName} 
                onChange={handleUserName}
                onBlur={handleBlurUserName}
                 />
                 {/* {
                    userNameError ?(<p className="text-red-600 font-semibold">UserName is Required</p>) : ""
                 } */}
                 {
                    userNameError && (<p className="text-red-600 font-semibold">UserName is Required</p>)
                 }
                </div>

                <div>
                <label htmlFor="password">Password:</label>
                <input type="password"
                name="password"
                id="password" 
                className="border-2-none rounded-md ml-3 mt-4 pl-20 h-8" 
                placeholder="PassWord" 
                value={password}
                onChange={handlePassword}
                onBlur={handleBlurPassword}
                
                />
                {
                    passwordError && (<p className="text-red-600 font-semibold">Password Required</p>)
                }
                </div>
                <div>
                    <input type="submit" value="Log in" name="Log in" className=" cursor-pointer border-2-none rounded-md ml-3 mt-4 mb-3 pl-2 w-20 h-10 bg-blue-600 text-white ouline-none" />
                </div>



            </form>
            {
                    isLogged && (<p className="text-green-600 font-bold text-center mt-2">Welcome to Homepage</p>)
                }

         </div>
    )
}
export default FormValidations