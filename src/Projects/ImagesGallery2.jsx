import {useState} from "react"
import one from "./Images/one.jpg"
import two from "./Images/two.jpg"
import three from "./Images/three.jpg"
import four from "./Images/four.jpg"
import five from "./Images/five.jpg"
import six from "./Images/six.jpg"
import seven from "./Images/seven.jpg"
import eight from "./Images/eight.jpg"

// const Images=()=>{
//     return(
//         <div>
//             <h1>Images Gallery</h1>
//                 <img src={one} alt="" />
                // <img src={two} alt="imagesGallery" />
                // <img src={three} alt="imagesGallery" />
                // <img src={four} alt="imagesGallery" />
                // <img src={five} alt="imagesGallery" />
                // <img src={six} alt="imagesGallery" />
                // <img src={seven} alt="imagesGallery" />
                // <img src={eight} alt="imagesGallery" /> 
//         </div>
//     )
// }
// export default Images

// const ImagesGallery2=()=>{


// // declaring an functional component calling it 
//     const Images =()=>{
//         return(
//         <div> 
//         <img src={one} alt="" />
//         <img src={two} alt="imagesGallery" />
//                 <img src={three} alt="imagesGallery" />
//                 <img src={four} alt="imagesGallery" />
//                 <img src={five} alt="imagesGallery" />
//                 <img src={six} alt="imagesGallery" />
//                 <img src={seven} alt="imagesGallery" />
//                 <img src={eight} alt="imagesGallery" /> 
//         </div>)

//     }

//     return(
//         <div style={{backgroundColor:"aqua",height:"100vh"}}>
//             <h1 style={{textAlign:"center",fontSize:"2rem"}}>Images Gallery</h1>
//             <Images/>  
//         </div>
//     )
// }
// export default ImagesGallery2



// const ImagesGallery2=()=>{

//     const ImagesList =[one,two,three,four,five,six,seven,eight]
    
    
//         return(
//             <div style={{backgroundColor:"aqua",height:"100vh"}}>
//                 <h1 style={{textAlign:"center",fontSize:"2rem"}}>Images Gallery</h1>
            
//             {
//                 ImagesList.map((img,index)=>{
//                     return <img  key={index} src={img} alt="" />
//                 })
//             }
            
            
//             </div>
//         )
//     }
    
// export default ImagesGallery2



// const ImagesGallery2=()=>{

//     const ImagesList =[one,two,three,four,five,six,seven,eight]
    

//     // const Images =(props)=>{
//     //     return <img src={props.src} alt="" />
//     // }
    
//         return(
//             <div style={{backgroundColor:"aqua",height:"100vh"}}>
//                 <h1 style={{textAlign:"center",fontSize:"2rem"}}>Images Gallery</h1>
//             {/* <Images/> */}
//             {
//                 ImagesList.map((img,index)=>{
//                     return <img  key={index} src={img} alt="" />
//                 })
//             }
            
            
//             </div>
//         )
//     }
    
// export default ImagesGallery2




// const ImagesGallery2 = () => {
//     const imagesList = [
//         {
//             url:one,
//             tags:["trees", "small","house","chairs","stairs","window","door","blue","pot","table","village","grass","mud house"]
//         },
//         {
//             url:two,
//             tags:["trees", "medium","house","chairs","stairs","window","door","sky","city","flowers","table","grass","cement house","lights"]
//         },
//         {
//             url:three,
//             tags:["trees","house","stairs","window","door","car","grass","large","city","cement house"]
//         },
//         {
//             url:four,
//             tags:["trees","house","canal","window","door","sunlight","pot","women","village","grass","mud house"]
//         },
//         {
//             url:five,
//             tags:["trees","house","chairs","stairs","window","door","lights","village","table","grass","mud house"]
//         },
//         {
//             url:six,
//             tags:["trees","car","coconut trees","house","chairs","window","door","bluesky","grass","city","cement house"]
//         },
//         {
//             url:seven,
//             tags:["trees","house","sofa","stairs","women","window","swimming pool","door","blue","city","grass","glass house"]
//         },
//         {
//             url:eight,
//             tags:["trees","house","stairs","window","door","blue","grass","mud house","city"]
//         },
    
//     ];

//     const Images = (props) => {
//         return <img src={props.src.url} alt="" />;
//     };

//     return (
//         <div style={{ backgroundColor: "aqua", height: "100vh" }}>
//             <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Images Gallery</h1>

//             {/* OBSERVE THE PARENTHESIS AFTER THE ARROW */}
//             {/* This syntax is especially useful when you want to implicitly return a single expression without the need for a return statement */}
            
//             {/* {imagesList.map((img, index) => (
//                 <Images key={index} src={img} />
//             ))
//             } */}

//             {/* This syntax is useful when you need to include multiple statements within the arrow function or if you prefer a more explicit return statement. */}
            
//             {imagesList.map((img, index) => {
//                 return <Images key={index} src={img} />;
//             })}


//         </div>
//     );
// };

// export default ImagesGallery2;


// const ImagesGallery2 = () => {


//     const [text,setText] = useState("")

//     const Images =(props)=>{
//         return <img src={props.src.url} alt="" />
//     }




    // const imagesList = [
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

    

//     const handleText=(event)=>{
//         setText(event.target.value)
//     }
//     // console.log(text);

    // const filteredImages=imagesList.filter((img)=>{
    //     if (text==="" || img.tags.includes(text.toLowerCase())){
    //         return true
    //     }
    // })

//     // console.log(filteredImages);
//     return (
//         <div style={{ backgroundColor: "gold", height: "100vh" }}>
            
//             <div>
//             <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Images Gallery</h1>
//             </div>
//             <div className="flex items-center justify-center">
//                  <input className="border-2 outline-none rounded border-blue-500  w-96 bg-green-100 pl-2 h-8 mb-2 mt-2 text-black-400 " value={text} onChange={handleText} type="text" name=""  placeholder="Search your Images here"  />
//             </div>
//              <div className=" flex flex-wrap gap-2 justify-center items-center p-2 mt-4">

//         {
//             filteredImages.map((img,index)=>(
//                 <Images key={index} src={img}/>
//             ))
//         }
//             </div>

//         </div>
//     );
// };

// export default ImagesGallery2;


const ImagesGallery2=()=>{

    const [text,setText] =useState("")

    const imagesList = [
        {
            url:one,
            tags:["trees", "small","house","chairs","stairs","window","door","blue","pot","table","village","grass","mud house"]
        },
        {
            url:two,
            tags:["trees", "medium","house","chairs","stairs","window","door","sky","city","flowers","table","grass","cement house","lights"]
        },
        {
            url:three,
            tags:["trees","house","stairs","window","door","car","grass","large","city","cement house"]
        },
        {
            url:four,
            tags:["trees","house","canal","window","door","sunlight","pot","women","village","grass","mud house"]
        },
        {
            url:five,
            tags:["trees","house","chairs","stairs","window","door","lights","village","table","grass","mud house"]
        },
        {
            url:six,
            tags:["trees","car","coconut trees","house","chairs","window","door","bluesky","grass","city","cement house"]
        },
        {
            url:seven,
            tags:["trees","house","sofa","stairs","women","window","swimming pool","door","blue","city","grass","glass house"]
        },
        {
            url:eight,
            tags:["trees","house","stairs","window","door","blue","grass","mud house","city"]
        },
    
    ];

    const Images=(props)=>{
        return <img src={props.src.url} alt="" />
    }

    const handleText=(event)=>{
        setText(event.target.value)
    }

    const filteredImages=imagesList.filter((image)=>{
        if(text==="" || image.tags.includes(text.toLowerCase())){
            return true
        }
    })
    

    return (
        <div style={{ backgroundColor: "gold", height: "100vh" }}>
            
            <div>
            <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Images Gallery</h1>
            </div>
            <div className="flex items-center justify-center">
                <input className="border-2 outline-none rounded border-blue-500  w-96 bg-green-100 pl-2 h-8 mb-2 mt-2 text-black-400 "
                 value={text} onChange={handleText}
                  type="text" name=""  placeholder="Search your Images here"  />
            </div>
             <div className=" flex flex-wrap gap-2 justify-center items-center p-2 mt-4">

            {
                filteredImages.map((img,index)=>(
                    <Images key ={index} src={img}/>
                ))
            }


            </div>

        </div>
    )
}
export default ImagesGallery2;
