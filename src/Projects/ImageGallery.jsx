import {useState} from "react"
import one from "./Images/one.jpg"
import two from "./Images/two.jpg"
import three from "./Images/three.jpg"
import four from "./Images/four.jpg"
import five from "./Images/five.jpg"
import six from "./Images/six.jpg"
import seven from "./Images/seven.jpg"
import eight from "./Images/eight.jpg"


// const imagesList =[
//     {
//         url:one,
//         tags:["trees", "small","house","chairs","stairs","window","door","blue","pot","table","village","grass","mud house"]
//     },
//     {
//         url:two,
//         tags:["trees", "medium","house","chairs","stairs","window","door","sky","city","flowers","table","grass","cement house","lights"]
//     },
//     {
//         url:three,
//         tags:["trees","house","stairs","window","door","car","grass","large","city","cement house"]
//     },
//     {
//         url:four,
//         tags:["trees","house","canal","window","door","sunlight","pot","women","village","grass","mud house"]
//     },
//     {
//         url:five,
//         tags:["trees","house","chairs","stairs","window","door","lights","village","table","grass","mud house"]
//     },
//     {
//         url:six,
//         tags:["trees","car","coconut trees","house","chairs","window","door","bluesky","grass","city","cement house"]
//     },
//     {
//         url:seven,
//         tags:["trees","house","sofa","stairs","women","window","swimming pool","door","blue","city","grass","glass house"]
//     },
//     {
//         url:eight,
//         tags:["trees","house","stairs","window","door","blue","grass","mud house","city"]
//     },
// ];

// const imagesList=[one,two,three,four,five,six,seven,eight]

// const Image = () =>{
//         return (
//         <img src={one} alt="imagesGallery" />
//         )
// }


// const Image = (props) =>{
//         return (
//         <img src={props.src} alt="imagesGallery" className="m-2 rounded" />
//         )
// }

const filteredImages = imagesList.filter((item) =>{
    if(text==="" || item.tags.includes(text.toLowerCase())){
        // console.log(text);
        return true
    }
})

// const Image = (props) =>{
//         return (
//         <img src={props.imageUrl} alt="imagesGallery" />
//         )
// }

const ImageGallery =()=>{

    const [text,setText]=useState("")

    const handleText=(event)=>{
        setText(event.target.value)
}

    return (
        <div className="bg-green-100 h-full">
            <h1 className="text-3xl p-5 text-blue-700 text-center font-bold">ImageGallery</h1>
            
            <div className="flex items-center justify-center">
            <input className="border-2 outline-none rounded border-blue-500  w-96 bg-green-100 pl-2 h-8 text-black-400 " type="text" name="" value={text} placeholder="Search your Images here" onChange ={handleText} />
            </div>

            <div className=" flex flex-wrap gap-2 justify-center items-center p-2 mt-4"> 
            {/* <Image/> */}
             
            {
                imagesList.map((img, index) => {
                    return <Image key={index} src={img} alt="" />
                })
            }

            {/* {
                imagesList.map((img) => {
                    return <img src={img} alt="" />
                })
            }  */}
             {/* {
                imagesList.map((img) => {
                    return <img imageUrl={img} alt="" />
                })
            }  */}
            
            
            
                {/* <img src={one} alt="imagesGallery" />
                <img src={two} alt="imagesGallery" />
                <img src={three} alt="imagesGallery" />
                <img src={four} alt="imagesGallery" />
                <img src={five} alt="imagesGallery" />
                <img src={six} alt="imagesGallery" />
                <img src={seven} alt="imagesGallery" />
                <img src={eight} alt="imagesGallery" /> */}
            </div>
        </div>
    )
}
export default ImageGallery

// const imagesList =[one,two,three,four,five,six,seven,eight]

// const imagesList =[
//     {
//         url:one,
//         tags:["trees", "small","house","chairs","stairs","window","door","blue","pot","table","village","grass","mud house"]
//     },
//     {
//         url:two,
//         tags:["trees", "medium","house","chairs","stairs","window","door","sky","city","flowers","table","grass","cement house","lights"]
//     },
//     {
//         url:three,
//         tags:["trees","house","stairs","window","door","car","grass","large","city","cement house"]
//     },
//     {
//         url:four,
//         tags:["trees","house","canal","window","door","sunlight","pot","women","village","grass","mud house"]
//     },
//     {
//         url:five,
//         tags:["trees","house","chairs","stairs","window","door","lights","village","table","grass","mud house"]
//     },
//     {
//         url:six,
//         tags:["trees","car","coconut trees","house","chairs","window","door","bluesky","grass","city","cement house"]
//     },
//     {
//         url:seven,
//         tags:["trees","house","sofa","stairs","women","window","swimming pool","door","blue","city","grass","glass house"]
//     },
//     {
//         url:eight,
//         tags:["trees","house","stairs","window","door","blue","grass","mud house","city"]
//     },
// ]

// const Image = (props) =>{
//     return <img src={props.src.url} alt="imagesGallery" className="m-2 rounded" />
    
// }



// const ImageGallery =()=>{

// const [text,setText] = useState("")

// const filteredImages = imagesList.filter((item)=>{
//     if (text === "" || item.tags.includes(text.toLowerCase())){
//         return true
//     }
// })
// // console.log(filteredImages)

//      const handleText=(event)=>{
//         setText(event.target.value)
//      }
//     //  console.log(text)

//     return (
//         <div className="bg-green-100 h-full">
//             <h1 className="text-3xl p-5 text-blue-700 text-center font-bold">ImageGallery</h1>
        
//             <div className="flex items-center justify-center">
//                 <input className="border-2 outline-none rounded border-blue-500  w-96 bg-green-100 pl-2 h-8 text-black-400 " value={text} onChange={handleText} type="text" name=""  placeholder="Search your Images here"  />
//             </div>
//             <div className=" flex flex-wrap gap-2 justify-center items-center p-2 mt-4">
                   
//             {
//                 filteredImages.map((img, index) => {
//                     return <Image key={index} src={img} alt="" />
//                 })
//             }

//                 {/* <Image/> */}
//                  {/* <img src={one} alt="imagesGallery" />
//                  <img src={two} alt="imagesGallery" />
//                  <img src={three} alt="imagesGallery" />
//                  <img src={four} alt="imagesGallery" />
//                  <img src={five} alt="imagesGallery" />
//                  <img src={six} alt="imagesGallery" />
//                  <img src={seven} alt="imagesGallery" />
//                  <img src={eight} alt="imagesGallery" /> */}
//             </div>

//         </div>
//     )
// }
// export default ImageGallery