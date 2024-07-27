// const ConditionalRendering = (props) => {
//     const { emp } = props;
//     return (
//         <div>
            // <h1 style={{ color: "blue", fontSize: "2rem" }}>Conditional Rendering</h1>
            // {
            //     emp.map((item, index) => {
            //         const { name, designation, status } = item;
//                     if(status){
//                         return(
//                             <div key={index}>
//                                  <h2>Name:{name}</h2>
//                                  <h2>Designation:{designation}</h2>
//                             </div>
//                         )
//                     }else{
//                         return(
//                             <div key={index}>
//                          <h2>Designation:{designation}</h2>
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     );
// }

// export default ConditionalRendering;

// const ConditionalRendering = (props) => {
//     const { emp } = props;
//     return (
//         <div>
//             <h1 style={{ color: "blue", fontSize: "2rem" }}>Conditional Rendering</h1>
//             {
//                 emp.map((item, index) => {
//                     const { name, designation, status } = item;
//                     return (
//                         <div key={index}>
//                             {status ? (
//                                 <>
//                                     <h2>Name: {name}</h2>
//                                     <h2>Designation: {designation}</h2>
//                                 </>
//                             ) : (
//                                 <h2>Designation: {designation}</h2>
//                             )}
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// }

// export default ConditionalRendering;


// const ConditionalRendering = (props) => {
//     const { emp } = props
//     return (
//         <div>
//             <h1 style={{ color: "blue", fontSize: "2rem" }}>Conditional Rendering</h1>
//             {
//                 emp.map((item, index) => {
//                     const { name, designation, status } = item;
//                     return status && (
//                         <div key={index}>
//                             <h2>Name:{name}</h2>
//                             <h2>Designation:{designation}</h2>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default ConditionalRendering;


const ConditionalRendering=(props)=>{
    // console.log(props);
    const {emp}=props

    return (
        <div>
            <h1>Conditional Rendering</h1>

            {
                emp.map((item,index,index1)=>{
                    const {name,designation,status} =item
                    // return( 
                    // <div key={index}>
                    //     <h1>Name:{name}</h1>
                    //     <h2>Status:{status}</h2>
                    //     <h3>Designation:{designation}</h3>
                    // </div>
                    // )

                    //  if else conditional rendering
                    // if(status){
                    //     return(
                    //         <div key={index} >
                    //             <h1>Name:{name}</h1>
                    //         </div>
                    //     )
                    // }else{
                    //     return(
                    //         <div key={index} >
                    //             <h1>Designation:{designation}</h1>
                    //         </div>
                    //     )
                    // }

                    // ternary operator
                    // return(
                    //     <div>
                    // {status ? (
                
                    //         <div key={index}>
                    //             <h1>Designation:{designation}</h1>
                    //         </div>
                        
                    // ) :(
                        
                    //         <div key={index1}>
                    //             <h1>Name:{name}</h1>
                    //         </div>
                        
                    // )
                    // }
                    // </div>)
                    return(
                        <div key={index}>
                            {status && (
                                <div><h1>Name:{name}</h1></div>
                            )}
                        </div>
                    )
                })
            }


        </div>
    )



}
export default ConditionalRendering


