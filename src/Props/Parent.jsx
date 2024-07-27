import Children from "./Children"

const Parent = (props) =>{

    // console.log(props);
    const {name}=props
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>Name:{props.name}</h2>
            {/* <h2>{name}</h2> */}
            <Children child={name}/>
        </div>
    )
}
export default Parent