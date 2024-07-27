import {useState} from "react"
const StudentForm =() =>{

    const [studentName,setStudentName] =useState("")
    const [studentPassword,setStudentPassword] =useState("")
    const [isLogged,setIsLogged] = useState(false)

    const handleStudentName=(event)=>{
        setStudentName(event.target.value)
    }
    // console.log(studentName)
    
    const handleStudentPassword=(event)=>{
        setStudentPassword(event.target.value)
    }
    // console.log(studentPassword)

    const handleSubmit =(event)=>{
        event.preventDefault();
         if(studentName !== "" && studentPassword !== ""){
            setIsLogged(true)
         }else{
            setIsLogged(false)
         }
    }


    return (
        <div className="text-center bg-gray-300 mt-20 ml-40 mr-40 pt-10 pb-10">
        <h1 className="text-3xl text-blue-900">Student Login</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <input type="text"
        name="studentName"
        id="studentName"
        placeholder="Full Name"
        className="border-2 rounded mt-6 mb-2 pl-20" 
        value={studentName}
        onChange={handleStudentName} 
        // onBlur ={handleBlurStudentName}
        />
        </div>
        <div>
            <input type="password"
            name="studentPassword"
            id="studentPassword"  
            placeholder="Password" 
            className="border-2 rounded  mb-4 pl-20"
            value={studentPassword}
            onChange={handleStudentPassword} 
            // onBlur ={handleBlurStudentPassword}

            />
        </div>
        <div>
            <input type="submit" value="Submit" className="border-6 rounded bg-blue-500 h-10 w-20 text-white mt-4 outline-none cursor-pointer" />
        </div>
        
        </form>
        {
            isLogged && (<p className="text-green-600 font-bold text-center mt-2">Student Registration done Successfully</p>)

        }
        </div>  
    )
}
export default StudentForm