import React from 'react'
import {bdr} from '../App.js';
const login = () => {
  return (
    <div id="login" class={bdr}>
      <img id="logo" src="logo1.jpg"/>
      
      <h1 id="tophead">
        Student Housing Chain
      </h1>
      <div id="details">
        <b>
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
        </b>
      </div>
    </div>
  )
}

export default login

