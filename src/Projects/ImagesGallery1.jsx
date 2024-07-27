import {useState} from "react"
import "./ImageGallery1.css"
import one from "./Images/one.jpg"
import two from "./Images/two.jpg"
import three from "./Images/three.jpg"
import four from "./Images/four.jpg"
import five from "./Images/five.jpg"
import six from "./Images/six.jpg"
import seven from "./Images/seven.jpg"
import eight from "./Images/eight.jpg"


const imagesList=[one,two,three,four,five,six,seven,eight]

const Images=(props)=>{
    return <img src={props.imageUrl} alt="ImageGallery" />
}

const ImageGallery1=()=>{

     


    return(
        <div id="galleryDiv" className="bg-red-200 pt-4 mt-0">
            <h1 className="text-4xl font-bold text-center h-10 text-indigo-950">Image Gallery</h1>
            <div className="flex justify-center items-center mt-4 border-1 bg-white w-68  absolute left-80 ml-44 p-4 h-0.5" id = "searchContainer"><i className="bi bi-search shadow-sm "></i><input type="text" className="w-64 bg-transparent border-0 outline-0 pl-4 text-indigo-950 w-2 " placeholder="Search your images" /></div>
            <div className="mt-36 ml-4 rounded mb-6" id="imageContainer">
            {
                    imagesList.map((image,index)=>{
                        return <Images imageUrl={image} key={index}/>
                        
                    })
                }
        
                {/* <img src={one} alt="imagesGallery" />
                <img src={two} alt="imagesGallery" />                
                <img src={three} alt="imagesGallery" />
                <img src={four} alt="imagesGallery" />
                <img src={five} alt="imagesGallery" />
                <img src={six} alt="imagesGallery" />
                <img src={seven} alt="imagesGallery" />
                <img src={eight} alt="imagesGallery" />  */}
               
            </div>
        </div>
    )
}
export default ImageGallery1;