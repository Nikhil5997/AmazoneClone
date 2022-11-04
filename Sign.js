import React from 'react'
import {  Link } from "react-router-dom";

const sign = () => {
  return (
    <div className='main-box'>
    <div className='img-box'></div>
    <div className='sign'>
    <h1>Create account</h1>
    <form onSubmit={''} autoComplete="on">
    <h2>Your Name</h2>
    <input type="text" autoComplete='on' />
    <h2>Email </h2>
    <input type="email" autoComplete='on'/>
    <h2>Email Again </h2>
    <input type="email" autoComplete='on'/>
    <label><h2>Password</h2></label>     
    <input type="password" autoComplete='on'  placeholder='at least 6 character'/><br/><br/>
    <label><h2>Password Again</h2></label>     
    <input type="password" autoComplete='on'/><br/>


    <button className='btn1' onClick={''}>Create Your Amazone Account</button><br/>
    <br/>

    




    <Link to="/login">Already have account</Link><br/>

    

    
    </form>
    </div>
    </div>
  
      
   
  )
}

export default sign
