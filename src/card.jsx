import React, { useState } from "react";

const Card = (weatherData) => {
    const { temp_f } =weatherData;
    return (
      <div className="card-container" >
          <p>temp_f</p>
      </div>
    );
  };
  
  export default Card;