import React from 'react'
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Navbar">
   
      <nav>
     
        <Link to="/">Home</Link>
        


        <Link to="/productapi">ProductApi</Link>

        <Link to="/login">Login</Link>

        <Link to="/addtocard">AddtoCard</Link>
  

      </nav>
      <Outlet />
  )
}

export default HomePage
