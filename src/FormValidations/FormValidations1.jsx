import {useState,useEffect} from "react"

const FormValidations1 =() =>{

    const [formData,setFormData] = useState({
        userName:"",
        userNameError:false,
        password:"",
        passwordError:false,
        isLogged:false,
    })
    
    const {userName,userNameError,password,passwordError,isLogged} =formData;
    
    // console.log("for the form validations component");

    // useEffect(()=>{
    // console.log("for the form validations component");
    // },[]);

    // useEffect(()=>{
    //     console.log("for the form validations component");
    // },[userName]);

    useEffect(()=>{
        console.log("for the form validations component");
    });
    
  
    const handleUserName=(event)=>{
        setFormData({...formData,userName:event.target.value})
   }

    const handlePassword=(event) =>{
        setFormData({...formData,password:event.target.value})

 }
    const handleBlurUserName=(event)=>{

        if(userName === ""){
            setFormData({...formData,userNameError:true})

        } else{
            setFormData({...formData,userNameError:false})
        }
    }

    const handleBlurPassword=(event)=>{
        if(password === ""){
            setFormData({...formData,passwordError:true})

        }else{
           setFormData({...formData,passwordError:false})

        }
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
            if(userName !== "" && password !== ""){
                setFormData({...formData,userNameError:false,passwordError:false,isLogged:true})
                
            }else if(userName === "" && password === ""){
                setFormData({...formData,userNameError:true,passwordError:true,isLogged:false})
                
            }else if(userName !== ""){
                setFormData({...formData,userNameError:false,isLogged:false})

            }else if(password !== ""){
                setFormData({...formData,passwordError:false,isLogged:false})

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
                {
                    userNameError ?(<p className="text-red-600 font-semibold">UserName is Required</p>) : ""
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
export default FormValidations1