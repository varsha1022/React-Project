import React, {useState,useEffect} from "react" 
// import Example1 from "./Components1/Example1"
// import Tasks1 from "./Components1/Tasks1"
// import Example from "./Components1/Example"
// import Super_over_league from "./Tasks/Super_over_league"
// import Congrats from "./Tasks/Congrats"
// import Social_Buttons from "./Tasks/Social_Buttons"
// import Props from "./Props/Props"
// import Parent from "./Props/Parent"
// import ConditionalRendering from "./ConditionalRendering/ConditionalRendering"
// import UseState from "./StateManagement/UseState"
// import UseState1 from "./StateManagement/UseState1"
// import UseState2 from "./StateManagement/UseState2"
// import ImagesGallery1 from "./Projects/ImagesGallery1"
// import ImageGallery from "./Projects/ImageGallery"
// import FormValidations from "./FormValidations/FormValidations.jsx"
// import FormValidations1 from "./FormValidations/FormValidations1.jsx"
// import StudentForm from "./Projects/StudentForm"
// import ChangeMode from "./Projects/ChangeMode"
// import Subscribe from "./Tasks/Subscribe.jsx"
// import UseEffect from "./UseEffect/UseEffect"
// import ImagesGallery2 from "./Projects/ImagesGallery2"
// import Notifications from "./Tasks/Notifications"
// import ShowHide from "./Tasks/ShowHide"
// import Counter from "./Tasks/Counter"
// import EvenOdd from "./Tasks/EvenOdd"
// import FAQs from "./Tasks/FAQs.jsx"
// import UseContext from "./UseContext/UseContext.jsx"
// import UseMemoInc from "./UseMemo/UseMemoInc.jsx"
// import UseCallback from "./UseCallBack/UseCallback.jsx"
// import UseRef from "./UseRef/UseRef.jsx"
// import MyRouter from "./Router/MyRouter"
// import CommentsAPI from "./CustomHooks/CommentsAPI"
// import PostsAPI from "./CustomHooks/PostsAPI"
// import CounterReducer from "./useReducer/CounterReducer"
// import ReduxCounter from "./Redux/ReduxCounter"
// import ReduxForm from "./Redux/ReduxBankAccount/ReduxForm"
// import ReduxAccount from "./Redux/ReduxBankAccount/ReduxAccount"
// import Icons from  "./Icons"
// import './App.css'
import ImageGallery from "./ImageGallery/ImageGallery.jsx"


function App() {

  const [count,setCount]=useState(0)


  // create an object
 const person={
  name:"varsha",
  location:"DSNR"
 }
 const person2={
  name:"shree",
  location:"MH"
 }

//  function count (){
//   return count+1
//  }

const employee = [
{
  name:"Varsha",
  designation:"HTML",
  status:true
},
{
  name:"Ramya",
  designation:"Python",
  status:false
},
{
  name:"Hema",
  designation:"CSS",
  status:true
},
]
const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
 ]
  
  return (
    <>
    {/* <Tasks1/> */}
    {/* <button className="border-2 rounded bg-blue-500 text-white border-none ml-40 m-4 p-3" onClick={()=>{
      setCount(count+1)}
    }>Count:{count}</button> */}
      {/* <h1>Hello World!</h1> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nisi.</p> */}
      {/* <Example/> */}
      {/* <Example1/> */}
      {/* <Super_over_league/> */}
      {/* <Congrats/>   */}
      {/* <Social_Buttons/> */}
      {/* <Props personObj={person}/> */}
      {/* <Props personObj={person2}/> */}
      {/* <Props personObj={person}/> */}
      {/* <Props personObj={person2}/> */}
      {/* <Parent name="Niltech" /> */}
      {/* <ConditionalRendering emp={employee}/> */}
      {/* <UseState/> */}
      {/* <UseState1/> */}
      {/* <UseState2/> */}
      {/* <ImagesGallery1/> */}
      {/* <ImageGallery/> */}
      {/* <FormValidations/> */}
      {/* <FormValidations1/> */}
      {/* <StudentForm/> */}
      {/* <ChangeMode/> */}
      {/* <Subscribe/> */}
      {/* <UseEffect/> */}
      {/* <ImagesGallery2/> */}
      {/* <Notifications/> */}
      {/* <ShowHide/> */}
      {/* <Counter/> */}
      {/* <EvenOdd/> */}
      {/* <FAQs list={faqsList}/> */}
      {/* <UseContext/> */}
      {/* <UseMemoInc/> */}
      {/* <UseCallback/> */}
      {/* <UseRef/> */}
      {/* <MyRouter/> */}
      {/* <CommentsAPI/> */}
      {/* <PostsAPI/> */}
      {/* <CounterReducer/> */}
      {/* <ReduxCounter/> */}
      {/* <ReduxForm/> */}
      {/* <ReduxAccount/> */}
    {/* <Icons/> */}
    <ImageGallery/>
    </>
  )
}

export default App


// regular function with a call and declaration
// function add() {
//   console.log(3+6);
// }
// add()

// functional restrictions:function name shoudld start with a capital letter
// const Add=()=>{
//   console.log(8+8);
// }
// Add() there is no need to cal the function while using the functional based components  