import  React  from "react"
import {useFetchAPI} from "./useFetchAPI"

const CommentsAPI=()=>{

    // const [data,setData] = useState([])

    const url="https://jsonplaceholder.typicode.com/comments"
    // // console.log(fetch(url))

    // async function fetchApi(){
    //     const response = await fetch(url)
    //     const jsonData = await response.json()
    //     // console.log(jsonData)
    //     setData(jsonData)
    // }

    // useEffect(()=>{
    //     fetchApi()
    // },[])
    // console.log(data);

    const comments = useFetchAPI(url)
    console.log(comments);

    return (

        <div>
            <h1>Comments API</h1>
        </div>
    )
}
export default CommentsAPI