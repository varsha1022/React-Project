import React from "react"
import {useRouteError} from "react-router-dom"


const NotFound = () => {

    const error = useRouteError()
    console.log(error.error);

    return (
        <div className="flex flex-col items-center justify-center m-11">
            <img src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png" alt="notFound" className="h-[300px]" />
            <h1 className="text-[#6d396b] text-5xl font-bold py-3">NotFound</h1>
<p className="text-[#f50d0d] font-bold">{error.error.message}</p>

        </div>
    )
}
export default NotFound