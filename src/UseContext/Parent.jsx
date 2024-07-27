import React ,{useContext} from "react"
import {MyData} from "./UseContext.jsx"
import Child from './Child.jsx';
 

const Parent = () => {
  const data = React.useContext(MyData)
  // console.log(data);


// const Parent = (props) => {
//   const { value } = props;
//   const { name, age, gender } = value;
//   console.log(value);

  return (
    <div>
      <h1>Parent Component</h1>
      {/* <p>{data.name}</p> */}
      {/* <p>{name}</p> */}
      {/* <p>{value.name}</p> */}
      {/* <h4>{value.age}</h4> */}
      {/* <Child  childData={value}/> */}
      <Child/>
    </div>
  );
};

export default Parent;
