import GrandChild from "./GrandChild.jsx" 

const Child=(props)=>{
    // const {childData} = props
    // const {age,name,gender} = props
    // console.log(childData);
    return(
        <div>
            <h1>Child Component</h1>
            {/* <p>{childData.gender}</p> */}
            <GrandChild/>
        </div>
    )
}
export default Child;