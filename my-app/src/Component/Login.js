import React,{useState,useEffect} from 'react'
import {  Link } from "react-router-dom";


const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const handleClick=()=>{
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
  }
  return (
    <div className='main-box'>
    <div className='img-box'></div>
    <div className='login'>
    <h2>Login</h2>
    <form onSubmit={''} autoComplete="on">
    <h4>Email or mobile number</h4>
    <input type="email" autoComplete='on' onChange={(e)=>setEmail(e.target.value)}/>
    <label><h4>Password</h4></label>     
    <h4><a href='#'>Forget Password</a></h4>
    <input type="password" autoComplete='on' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
    <button className='btn1' onClick={handleClick}>Login</button><br/>
    <br/>

    ------------------New to Amazone-------------------<br/><br/>




    <button className='btn1'><Link to="/sign">I am a new Customer</Link></button><br/>
 <div>
 <div>{localStorage.getItem("email")}</div>
 <div>{localStorage.getItem("password")}</div>
 </div>
    

    
    </form>
    </div>
    </div>
  
      
   
  )
}

export default Login
