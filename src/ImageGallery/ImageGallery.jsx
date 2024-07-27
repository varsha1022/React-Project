import { useState } from "react";
import "./ImageGallery.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import image9 from "./Images/image9.jpg";
import image10 from "./Images/image10.jpg";
import image11 from "./Images/image11.jpg";
import image12 from "./Images/image12.jpg";
import image13 from "./Images/image13.jpg";
import image14 from "./Images/image14.jpg";
import image15 from "./Images/image15.jpg";
import image16 from "./Images/image16.jpg";
import image17 from "./Images/image17.jpg";
import image18 from "./Images/image18.jpg";
import image19 from "./Images/image19.jpg";
import image20 from "./Images/image20.jpg";

const Images = (props) => {
    return <img src={props.imageUrl.url} alt="ImageGallery" />;
};

const ImageGallery = () => {
    const [text, setText] = useState("");

    const imagesList = [
        {
            url: image1,
            tags: ["blue", "bird", "nest", "leaves", "black", "fly", "nature"],
        },
        {
            url: image2,
            tags: ["trees", "yellow", "bird", "fly", "yellowBird", "sky"],
        },
        {
            url: image3,
            tags: ["nature", "bird", "orange", "fly", "green", "leaves"],
        },
        {
            url: image4,
            tags: ["nature", "bird", "red", "fly", "green", "leaves", "plant"],
        },
        {
            url: image5,
            tags: ["blue", "sunset", "mountains", "violet", "trees", "black", "sky", "snow"],
        },
        {
            url: image6,
            tags: ["nature", "bird", "red", "blue", "fly", "green", "kingFisher", "beauty", "colorful"],
        },
        {
            url: image7,
            tags: ["blue", "morning", "mountains", "clouds", "trees", "water", "sky", "dawn", "nature"],
        },
        {
            url: image8,
            tags: ["blue", "morning", "mountains", "clouds", "trees", "water", "sky", "nature", "shadow"],
        },
        {
            url: image9,
            tags: ["blue", "sunrise", "morning", "grass", "orange", "flowers", "trees", "yellow", "sky", "hillStation"],
        },
        {
            url: image10,
            tags: ["blue", "moon", "beach", "trees", "black", "sky", "sand", "waves", "fullmoon", "night"],
        },
        {
            url: image11,
            tags: ["blue", "morning", "mountains", "soil", "trees", "shadow", "sky", "snow"],
        },
        {
            url: image12,
            tags: ["orange", "sunset", "mountains", "gray", "grey", "trees", "grass", "sky", "smoke", "clouds", "orangeclouds"],
        },
        {
            url: image13,
            tags: ["blue", "morning", "grass", "poles", "trees", "white", "sky", "hillStation", "smoke"],
        },
        {
            url: image14,
            tags: ["blue", "white", "morning", "water", "shadow", "snowtrees", "trees", "light", "sky"],
        },
        {
            url: image15,
            tags: ["orange", "sunset", "red", "yellow", "clouds", "trees", "palm tree", "sky", "orangeclouds", "water", "sun"],
        },
        {
            url: image16,
            tags: ["orange", "sunset", "red", "yellow", "blue", "trees", "grass", "sky", "sand", "water", "sun"],
        },
        {
            url: image17,
            tags: ["blue", "white", "moon", "snowtrees", "trees", "light", "sky"],
        },
        {
            url: image18,
            tags: ["blue", "flower", "pink", "solid blue", "simpleflower"],
        },
        {
            url: image19,
            tags: ["rose", "red", "petals", "gray"],
        },
        {
            url: image20,
            tags: ["yellow", "flower", "nature", "honeybee", "sunflower"],
        },
    ];

    const filteredImages = imagesList.filter((item) => {
        if (text === '' || item.tags.includes(text.toLowerCase())) {
            return true;
        }
        else{
            return false;
        }
    });

    const handleText = (event) => {
        setText(event.target.value);
    };
    const clearText = () => {
        setText("");
    };

    return (
        <div id="galleryDiv" className="pt-4 mt-0">
            <h1 className="text-4xl font-bold text-center h-10 text-indigo-950">Image Gallery</h1>
            <div className="flex justify-center items-center mt-4 border-1 rounded bg-white w-68 absolute left-80 ml-44 p-4 h-0.5">
                <i className="bi bi-search shadow-sm"></i>
                <input 
                    type="text" 
                    className="w-64  bg-transparent border-0 outline-0 pl-4 text-indigo-950" 
                    placeholder="Search your images" 
                    value={text} 
                    onChange={handleText} 
                />

            <button className="rounded outline-0 absolute left-80 ml-4 w-3/12 right-72 font-semibold text-center h-12 bg-white p-0.5 text-indigo-950" onClick={clearText}>Clear</button>
            </div>

            <div className="mt-36 ml-4 rounded mb-6" id="imageContainer">
                {filteredImages.length > 0 ? (
                    filteredImages.map((image, index) => (
                        <Images key={index} imageUrl={image} />
                    ))
                ) : (
                    <div className="p-36 absolute ml-16" >
                        <p className="text-indigo-950 font-semibold text-3xl">Please search images using keywords related to <span className='bg-white font-bold text-red-600  underline'>Birds and Nature</span>.</p></div>
                )}
            </div>
        </div>
    );
};

export default ImageGallery;
