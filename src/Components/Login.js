import React from 'react';
import { useState } from 'react';

var logintype='Sign Up';


const Login = ({bdr}) => {
  
  const[lmode,setLogin]=useState(logintype);
  
  const changeLogin = () =>
  {
    console.log("Change Login");
    if(logintype === 'Sign Up')
    {
      logintype = 'Login';
    }
    else 
    {
      logintype = 'Sign Up';
    }
    setLogin(logintype);
  }




  const checkType =() =>{
    if(lmode==='Sign Up')
    {
      return (
        <div id="details">
          <b>
          <form>
          <input className="inputs" placeholder='Organization Name' id="org_name"/>
          <br/>
          <br/>
          <input className="inputs" type="text" placeholder="Hostel" id="hostel_name"/>
          <br/>
          <br/>
          <input className="inputs" type="text" placeholder='User ID' id="yourid"/>
          <br/>
          <br/>
          <input className="inputs" type="password" placeholder="Password" id="pass"/>
          <br/>
          <br/>
          <input type="submit" className="btn-des btn-dark"/>
          </form>
          </b>

        </div>
      );
    }
    else 
    {
      return (
        <h1> Nothing to work on..</h1>
      )
    }
  }
    return (
      <div id="login" className={bdr}>
        {<button id="loginOpt" onClick={changeLogin}> <span>{lmode}</span> </button>}
        <img id="logo" src="logo1.jpg"/>
        
        <h1 id="tophead">
          Student Housing Chain
        </h1>
        {checkType()}
      </div>
    )
}

export default Login

