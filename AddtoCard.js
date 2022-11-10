import React from "react";

import { Link } from "react-router-dom";

const AddtoCard = () => {

  
  return (
    <div className="add">
   
      <Link to="/productapi">Back to products</Link><br/>
      <div className="proimg-1">
        <img alt="img not found" src={" "} />
        
      </div>
      <button onClick={""}>+</button> 
     
      <button onClick={""}>-</button>
     
      <div className="proprice">
        <h3>Price : {}</h3>
      </div>

      <div className="proprice">
      <h3> Total Price : {}</h3>

     
    </div>
    
    </div>

    
  );
};

export default AddtoCard;
