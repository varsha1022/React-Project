import GrandChildren from "./GrandChildren"
const Children = (props) => {
    // console.log(props);
    const {child}=props;
    return(
        <div>
            <h1>Children Component</h1>
            <h2>Name:{child["name"]}</h2>
            <GrandChildren grandchild={child}/>
        </div>
    )
}
export default Children