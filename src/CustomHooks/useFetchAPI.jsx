import React, {useEffect,useState} from "react"


export const useFetchAPI=(url)=>{

    const [data,setData] = useState([])

    // const url="https://jsonplaceholder.typicode.com/comments"
    // console.log(fetch(url))

    async function fetchApi(){
        const response = await fetch(url)
        const jsonData = await response.json()
        // console.log(jsonData)
        setData(jsonData)
    }

    useEffect(()=>{
        fetchApi()
    },[])
    // console.log(data);



    return(
        <div>
            {data}
        </div>
    )
}