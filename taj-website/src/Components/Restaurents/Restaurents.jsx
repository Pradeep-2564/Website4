import React, { useState } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const restaurant = [
  
  {id:2, image:"/Images/r2.jpeg"},
  {id:3, image:"/Images/r3.jpg"},
  {id:4, image:"/Images/r4.jpeg"},
  {id:5, image:"/Images/r5.jpg"},
  {id:1, image:"/Images/r1.jpg"},
];
const Restaurents = () => {
  
const [restaurantIndex,setrestaurantIndex] = useState(0)

const handleNextImg = ()=>{
  setrestaurantIndex((prevIndex)=>(prevIndex+1)%restaurant.length);
}

const handlePrevImg = ()=>{
  setrestaurantIndex((prevIndex)=>(prevIndex-1 + restaurant.length)%restaurant.length);
}
  
  return (
    <div>
      <div className="image-container">
        <div className="image-wrapper">
          <div>
            <img
              src={restaurant[restaurantIndex].image}
              alt={restaurant.id}
              className="image fade-animation"
            />
          </div>

          <button className="corner-button bottom-left" onClick={handlePrevImg}>
            <ArrowBackIcon />
          </button>
          <button className="corner-button bottom-right" onClick={handleNextImg}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Restaurents
