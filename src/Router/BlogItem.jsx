import React from "react"
import {Link} from "react-router-dom"

const BlogItem=({blogItem})=>{

    const {id,author,avatar_url,image_url,title,topic}=blogItem
    return (
        <Link to={`blogs/${id}`}>
        <div className="flex gap-5 border-[2px] m-3 p-3 rounded">
            <div>
                <img src={image_url} alt={title} className="h-[200px] w-96" />
            </div>
            <div className="flex flex-col mt-2 gap-5 ">
                <p>{topic}</p>
                <h3>{title}</h3>
                <div className="mt-4 flex gap-2">
                    <img src={avatar_url} alt={author} className="h-8 rounded-full" />
                    <span>{author}</span>
                </div>
            </div>

        </div>
        </Link>
    )
    }

export default BlogItem