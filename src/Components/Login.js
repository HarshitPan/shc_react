import React from 'react';
import { useState } from 'react';

var angle=1;

const Login = ({bdr}) => {


  const rotation = () =>
  {
    const login=document.getElementById('login');
    const signup=document.getElementById('signup');
    let a='rotateY('+180*angle+'deg)';
    let b='rotateY('+180*(angle-1)+'deg)';
    if(angle === 1) login.style.opacity='1';

    login.style.transform = a;
    signup.style.transform = b;
    
    if(login.style.opacity === '1')
    {
      login.style.opacity = '0';
      signup.style.opacity = '1';
    }
    else
    {
      login.style.opacity = '1';
      signup.style.opacity = '0';
    }


    // if(login.style. === 1)
    // {
    //   login.style.zIndex = 0;
    //   signup.style.zIndex = 1;
    // }
    // else
    // {
    //   login.style.zIndex = 1;
    //   signup.style.zIndex = 0; 
    // }

    angle++;
  }

// const MobileScreen = () =>
// {
//     return (
//       <div id="loginMobile" className={bdr}>
//         <h1>visible</h1>
//       {<button id="loginOpt" onClick={changeLogin}> <span>{lmode}</span> </button>}
//       <img id="logo" src="logo1.jpg"/>
      
//       <h1 id="tophead">
//         Student Housing Chain
//       </h1>
//       {checkType()}
//     </div>
//     )
// }


  const checkType =() =>{return (

          <>
          <div id="login" className={bdr}>
            {<button id="loginOpt" onClick={rotation}> <span>Sign Up</span> </button>}
            <img id="logo" src="logo1.jpg"/>
            <h1 id="tophead">
              Student Housing Chain
            </h1>
            
            <h2> Login </h2>
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
              <p style={ { visibility : "collapse" } }></p>
            </div>
          </div> 
        <div id="signup" className={bdr}>
          {<button id="signOpt" onClick={rotation}> <span>Log In</span> </button>}
          <img id="logo" src="logo1.jpg"/>
          
          <h1 id="tophead">
            Student Housing Chain
          </h1>

          <h2> Sign Up </h2>
          <div id="details">
            <b>
            <form>
            <input className="inputs" placeholder='Organization Name' id="new_org_name"/>
            <br/>
            <br/>
            <input className="inputs" type="text" placeholder="Contact No./Email ID" id="contact"/>
            <br/>
            <br/>
            <input className="inputs" type="text" placeholder='Password' id="new_pass"/>
            <br/>
            <br/>
            <input className="inputs" type="password" placeholder="Confirm Password" id="confirm_pass"/>
            <br/>
            <br/>
            <input type="submit" className="btn-des btn-dark"/>
            </form>
            </b>
            <p style={ { visibility : "collapse" } }></p>
          </div>

          </div>
          </>
       );
    }
    return (
      <>
          {checkType()}
      </>
    )
}

export default Login


