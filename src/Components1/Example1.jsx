
const Example1 = () =>{

let x=10;
let y=20;
// console.log(x+y)
let z=x+y;
console.log(z);

    return(

        <div>
            <div style={{backgroundColor:"grey",border:"10px solid",margin:"2rem"}}>
                <h1>Hello</h1>
            </div>
            <div>
                <h1 style={{color:"red"}}>World</h1>
                <p style={{fontSize:"2rem"}}>The addition of x and y is {z}</p>
            </div>
        </div>

    )
}
export default Example1