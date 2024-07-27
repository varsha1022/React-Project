import {useState,useEffect } from "react"
import{useFetchAPI} from "./useFetchAPI"

const PostsAPI=()=>{


const url="https://jsonplaceholder.typicode.com/posts"


const posts = useFetchAPI(url)
console.log(posts); 

    return(
        <div>Posts API</div>
    )
}
export default PostsAPI