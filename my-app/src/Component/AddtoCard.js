import React from "react";


import { Link } from "react-router-dom";



const AddtoCard = () => {
  const data = JSON.parse(localStorage.getItem("carts"));
  
  
  return (
    <div className="add">

    
   
      <Link to="/productapi">Back to products</Link><br/>
      {
        data.map(item=>{
          return(
            <div>
            <div className="proimg-1">
            <img alt="img not found" src={item.images[0]} />
            
          </div>
          <button onClick={""}>+</button> 
         
          <button onClick={""}>-</button>
         
          <div className="proprice">
            <h3>Price : {item.price}</h3>
          </div>
    
          <div className="proprice">
        <h3> Total Price : {item.price}</h3>
    
         
        </div>
            </div>
          )
        })
      }
      
    
    </div>

    
  );
};

export default AddtoCard;
