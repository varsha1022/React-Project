const Props = (props) =>{
// console.log(props);
    const {personObj} = props
// console.log(personObj);
    // console.log(props.personObj);
    return (
        <>
            <h1>Props</h1>
            <h2>Name:{personObj.name}</h2>
            <h2>Location:{personObj['location']}</h2>
        </>
    )
}
export default Props