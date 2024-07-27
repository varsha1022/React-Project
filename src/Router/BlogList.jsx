import React from "react"
import {useState , useEffect} from "react"
import BlogItem from "./BlogItem"
// import { LuLoader2 } from "react-icons/lu";


const BlogList = ()=>{

    const [blogData, setBlogData] = useState([])

    const url="https://apis.ccbp.in/blogs"

    useEffect(()=>{
        const fetchBlogData = async ()=>{
            const response = await fetch(url)
            const jsonData = await response.json();
            setBlogData(jsonData)
        }
        fetchBlogData()
    },[])
    // console.log(blogData);



    return (

        <div>
            {/* <LuLoader2 /> */}

        {
            blogData.map((item)=>{
                return <BlogItem key={item.id} blogItem={item}/>

            })
            
        }
        </div>
    )
}
export default BlogList