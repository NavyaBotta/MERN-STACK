import React from "react";
//import RegisterForm from "./RegisterForm";
//import "./formstylings.css";

//import ClassBasedComponent from "./ClassBasedComponent";
import Nav from "./components/Nav.jsx";
import { Counter }  from "./components/Counter.jsx";
import  CounterFBC   from "./components/CounterFBC.jsx";
import DisplayDetails from "./components/DisplayDetails.jsx";


const App = () => {
  let details=["Navya","23NR1A0530"]
  let Role="Developer";

  
  let Name="Navya"
  let Roll="23NR1A0530"
  let Course="CSE"
  let College="BITS"
  return(
    <p>
      <Nav/>
      
      <Counter/>
       <CounterFBC fullDetails={details}  role={Role}/>
       <DisplayDetails role={Role} name={Name} roll={Roll} course={Course} clgname={College} />
      
      {/*<ClassBasedComponent/>
      <RegisterForm/>
    <h1> react using vite</h1>*/}
    
    </p>
  );
};
export default App;