const GrandChildren = (props) => {
    // console.log(props);
    const {grandchild}=props;
    return(
        <div>
            <h1>GrandChildren Component</h1>
            <h2>Name:{grandchild.name}</h2>
        </div>
    )
}
export default GrandChildren