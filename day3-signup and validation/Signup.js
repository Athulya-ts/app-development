import {TextField,Button } from '@mui/material';
import React from 'react'
import './SignUp.css'
import { useState } from 'react';

function Signup() {

    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[age,setAge] = useState(0);
    const[dob,setDob] = useState("");
    const[address,setAddress] = useState("");
    const[email,setEmail] = useState("");
    const[cno,setCno] = useState("");
    const [gender, setGender] = React.useState('female');

    const handleGender = (event) => {
      setGender(event.target.value);
    };

    const handleChange = (e) => {
        e.preventDefault()
        if(fname.length !== 0 && lname.length !== 0 && age >= 18 && dob.length === 10 && address.length !== 0 && email.length !== 0 && cno.length === 10 && (gender === "male" || gender === "female")){
            window.location.href = "../HomePage";
        }
    }
    
  return (<>
    <center>
    <div className = "signup-form">
    <h2 className = "sign-up">Sign - Up</h2>
        <form>
            <div className='left-sign-up'>
                <TextField type = "text" label = "First Name" onChange = {e => setFname(e.target.value)}></TextField>
                <div className='error'>
                {fname.length === 0 ?"*required" : ""}
                </div><br/>
            
                <TextField type = "text" label = "Last Name" onChange = {e => setLname(e.target.value)}></TextField>
                <div className='error'>
                {lname.length === 0 ?"*required" : ""}
                </div><br/>
                
                <TextField type = "number" label = "Age" onChange = {e => setAge(e.target.value)}></TextField>
                <div className='error'>
                {age < 18 && age < 50?"Not eligible" : ""}
                </div><br/>
                
                <TextField type = "text" label = "Date of Birth:DD/MM/YYYY" onChange = {e => setDob(e.target.value)}></TextField>
                <div className='error'>
                {dob.length === 0 ?"Enter a valid dob" : ""}
                </div><br/>
                
                <TextField type = "text" label = "Address" onChange = {e => setAddress(e.target.value)}></TextField>
                <div className='error'>
                {address.length === 0 ?"Enter a valid address" : ""}
                </div><br/>
                </div>
                
                <div className='right-sign-up'>
                <TextField type = "text" label = "Email" onChange = {e => setEmail(e.target.value)}></TextField>
                <div className='error'>
                {email.length === 0 || !((/$^|.+@.+..+/).test(email))?"Enter a valid email" : ""}
                </div><br/>
            
                <TextField type = "text" label = "Contact number" onChange = {e => setCno(e.target.value)}></TextField>
                <div className='error'>
                {cno.length !== 10  ?"Contact no should be 10 digits" : ""}  
                </div><br/>   
                
                <p>Gender</p>
                <div className='radio-btn'>
                <input type="radio" value="Male" name="gender" onChange={e => setGender(e.target.value)}/> Male
                <input type="radio" value="Female" name="gender" onChange={e => setGender(e.target.value)}/> Female
                </div>
                <br/>
            </div>
            
            <Button onClick = {handleChange} className = "submit-btn" variant = "contained" type = "submit">SUBMIT</Button>
        </form>
    </div>
    </center>
    </>
  )
}

export default Signup