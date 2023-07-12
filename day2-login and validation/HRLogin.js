import {TextField,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import './HRLogin.css'
import { Link } from 'react-router-dom';

function HRLogin() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleChange = (e) => {
        e.preventDefault()
        if(email.length !== 0 && (/$^|.+@.+..+/).test(email) && password.length >= 8 && name.length !== 0){
            window.location.href = "../HomePage";
        }
    }
    
  return (<>
  <div className='hr-background'>
    <div className = "hr-login-form">
    <h2 className='hr-header'>Sign - In</h2>
        <form>            

            <TextField type = "text" label = "Name" onChange = {e => setName(e.target.value)}></TextField>
            <div className='admin-error'>
            {name.length === 0 ?"*required" : ""}
            </div><br/>

            <TextField type = "text" label = "Email" onChange = {e => setEmail(e.target.value)}></TextField>
            <div className='hr-error'>
            {email.length === 0 || !((/$^|.+@.+..+/).test(email))?"Enter a valid email" : ""}
            </div><br/>
            
            <TextField type = "password" label = "Password" onChange = {e => setPassword(e.target.value)}></TextField>
            <div className='hr-error'>
            {password.length < 8  ?"Password should be atleast 8 digits" : ""}  
            </div><br/>  

            <div className='forgot-password-ah'>
            <Link to='/Signup'><p>Forgot Password ?</p></Link>
            </div> 
            
            <Button onClick = {handleChange} className = "hr-login" variant = "contained" type = "submit">SUBMIT</Button>
        </form>
    </div>
    </div>
    </>
  )
}

export default HRLogin