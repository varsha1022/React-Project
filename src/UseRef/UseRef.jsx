import {useState,useRef,useEffect} from "react"


const UseRef=()=>{

    const [text,setText] = useState("")

    const myRef = useRef("")
    // const myRef = useRef("hello")
    // console.log(myRef);
    // console.log(myRef.current);

    useEffect(()=>{
        // myRef.current.focus();
        myRef.current=text
    },[text])

    // useEffect(()=>{
    //     myRef.current.focus();
    //     myRef.current=text
    // },[text])


    const handleInputText=(event)=>{
        setText(event.target.value);
        // console.log(text)
        
    }

    const handleText=()=>{
        setText("")
        // myRef.current.focus();
        // myRef.current.value = setText("hello")

    }

    return(
        <div>
            <h1 className="text-center text-red-500 font-bold m-4 text-4xl">UseRef Hook()</h1>
            <input ref={myRef} type="text" name="" id="" placeholder="Enter The Text" className="border-2 rounded p-2 m-6"  value={text} onChange={handleInputText}/>
            <button type="reset" className="border-2 rounded p-2 font-semibold" onClick={handleText}>Reset</button>
            <p className="ml-6">The Text is typed is <span className="text-blue-500  font-semibold text-lg">{text}</span>. This is last  before letter which i typed is <span  className="text-green-500 font-semibold font-lg ">{myRef.current}</span> </p>
            
        </div>
    )
}
export default UseRef