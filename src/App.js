import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Login from "./LoginForm";
import LoginForm from "./LoginForm";
const App = () =>{
  const[isRegister,setIsRegister] =useState(true)
  return (
    <div className="App">
      {isRegister ? <RegisterForm/> : <LoginForm/>}
      <br/>
      <button id="basa1" onClick={()=>setIsRegister(!isRegister)}>
        {isRegister ? 'Switch to Login' : 'Switch to register'}
      </button>
    </div>
  );
}



export default App;



