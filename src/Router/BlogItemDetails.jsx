import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"


const BlogItemDetails=()=>{

    const [data,setData] = useState({});

    const myParams = useParams()
    // console.log(myParams);
    const {id} =myParams


    const url =`https://apis.ccbp.in/blogs/${id}`
    // console.log(url);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch (url)
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    },[id])
    // console.log(data);

    const {author,avatar_url,content,image_url,title,topic}=data



    return (
        <div className="flex flex-col gap-3">
            <h1 className="mt-4 mb-2">{title}</h1>
            <div className="flex gap-3 items-center mb-4">
                <img src={avatar_url} alt={author} className="h-12 rounded-full" />
                <span>{author}</span>
            </div>
            <img src={image_url} alt={title} className="rounded mb-4 h-80" />
            <p>{content}</p>
        </div>
    )
}
export default BlogItemDetails