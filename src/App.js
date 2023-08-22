
import Header from "./Components/header";
import Login from "./Components/Login";
import Footer from "./Components/footer";
import { useState } from 'react';

import './css/index.css';
import './css/login.css';

let mode='bg-dark'
var bdr='br-cyan'



function App() {
  
  const[cmode,setMode]= useState(mode);
  
  const changeMode= ()=>{
    console.log("Enter1")
    console.log("Enter2")
    console.log(mode)
    if(mode==='bg-dark')
    {
      bdr='br-dark'
      mode='bg-light';
    }
    else if(mode==='bg-light')
    {
      bdr='br-cyan'
      mode='bg-dark';
    }
    setMode(mode);
  }
  // <button id="mode" onClick={changeMode}/>
  return (
    
    <div className={"Body "+ cmode}>
      
      <Login bdr={bdr}/>
    </div>
  );
}
export {bdr};
export default App;

