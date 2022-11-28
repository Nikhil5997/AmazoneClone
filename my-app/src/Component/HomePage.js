import React from "react";
import { Outlet, Link } from "react-router-dom";


const HomePage = () => {
 
  return (
  
    <div className="Navbar">
   
      <nav>
     
        <Link to="/">Home</Link>
        


        <Link to="/productapi">ProductApi</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/login">Login</Link>

        <Link to="/addtocard">cart</Link>
  

      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
