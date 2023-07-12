import { Link } from 'react-router-dom';
import {TextField,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {login} from "../userSlice"
import './EmployeeLogin.css';

function EmployeeLogin() {
    
    const[id,setId] = useState(0);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    // const dispatch = useDispatch();
    
    const handleChange = (e) => {
        e.preventDefault();
        // dispatch(login({
        //     name: name,
        //     email: email,
        //     password: password,
        //     loggedIn: true,
        // })
        // );
        if(id > 0 && email.length !== 0 && (/$^|.+@.+..+/).test(email) && password.length >= 8 && name.length !== 0){
            window.location.href = "../HomePage";
        }
    }
    
    return (<>
    <div className='employee-background'>
    <div className = "employee-login-form">
    <h2 className='employee-header'>Sign - In</h2>
        <form>            

            <TextField type = "text" label = "Name" onChange = {e => setName(e.target.value)}></TextField>
            <div className='admin-error'>
            {name.length === 0 ?"*required" : ""}
            </div><br/>

            <TextField type = "number" label = "Id" onChange = {e => setId(e.target.value)}></TextField>
            <div className='employee-error'>
            {id <= 0 ?"Enter a valid Id" : ""}
            </div><br/>

            <TextField type = "text" label = "Email" onChange = {e => setEmail(e.target.value)}></TextField>
            <div className='employee-error'>
            {email.length === 0 || !((/$^|.+@.+..+/).test(email))?"Enter a valid email" : ""}
            </div><br/>
            
            <TextField type = "password" label = "Password" onChange = {e => setPassword(e.target.value)}></TextField>
            <div className='employee-error'>
            {password.length < 8  ?"Password should be atleast 8 digits" : ""}  
            </div><br/>   
            
            <div className='employee-create-account'>
            <p>No account ?</p>
            <Link to='/Signup'><p>Create Account </p></Link>
            </div>

            <div className='forgot-password'>
            <Link to='/Signup'><p>Forgot Password ?</p></Link>
            </div>
            <Button onClick = {handleChange} className = "employee-login" variant = "contained" type = "submit">SUBMIT</Button>
        </form>
    </div>
    </div>
    </>
  )
}

export default EmployeeLogin