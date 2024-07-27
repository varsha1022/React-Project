import {useState,useEffect} from "react"

const UseEffect=()=>{

const [comments,setComments] =useState([])
const[inputText,setInputText] =useState("")
    
    useEffect(()=>{
        const fetchData =async () =>{
            const response =await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            // console.log(data);
            setComments(data)
        }
    fetchData()
    },[]);
    // console.log(comments);


    const searchComments=(event)=>{
        if(event.key==="Enter"){
            // const searchText = inputText.value
            setInputText(event.target.value)
        }
       
    }

    const filteredComments = comments.filter((comment) => {
        return comment.name.includes(inputText.toLowerCase());
        // return comment.email.includes(inputText.toLowerCase());
        
    });



    return(
        <div>
            <h1 style={{textAlign:"center",fontSize:"3rem",marginTop:"2rem",color:"red"}}>UseEffect</h1>
            <div className="text-center">
            <input type="text" 
            name="inputText"
            id="inputText"
            placeholder="Search"
            onKeyUp={searchComments}
            className="border-2 border-gray-200 rounded text-center w-60 " />
            </div>
        {
            filteredComments.map((comment,index)=>{
                // const {email}= comment;
                const {name}= comment;

                return(
                    <li key={index} style={{marginTop:"2rem",fontSize:"2rem",color:"blue"}}>
                        {/* {email} */}
                        {name}
                        {/* <p style={{color:"gray"}}>{id}</p> */}
                        {/* <h1 style={{fontSize:"2rem",color:"blue"}}></h1> */}
                        {/* <p style={{color:"brown"}}>{email}</p> */}
                        {/* <p style={{color:"red"}}>{body}</p> */}
                    </li>
                )
            })
        }
        </div>
    )
}
export default UseEffect

