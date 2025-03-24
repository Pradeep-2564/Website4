import React from "react";
import "./Casino.css";

const Casino = () => {
  return (
    <div>
      <div className="business-head">
        <div className="busi-img">
          <img
            src="/Images/ca-bgc.jpg" alt=""/>
        </div>
        <div className="busi-content">
          <h1>
            <div className="busi-cont">
              <span>CASINO HOTELS SERVICES</span>
            </div>
          </h1>
        </div>
      </div>
      <div className="gift-container">
        <div className="gift-head">
          <p>Our Services</p>
        </div>
        <div className="gift-cards">
          <div className="card-gift">
            <div className="card-img">
              <img src="/Images/ca5.jpg" alt="img" />
            </div>
            <div className='card-content'>
              <p>The Royal Casino Resort</p>
              <span>Located in the heart of Las Vegas, The Royal Casino Resort offers unparalleled luxury. With a vast casino floor, VIP 
              services, and elegant suites, it's the perfect destination for those looking for a high-end experience.</span>
              <button>View More.</button>
            </div>
          </div>
          <div className="card-gift">
            <div className="card-content">
            <p>Monte Carlo Casino Hotel</p>
            <span>A picturesque escape in Monaco, the Monte Carlo Casino Hotel offers a perfect combination of exciting gaming and 
            relaxing resort amenities. Enjoy the spa, fine dining, and breathtaking views.</span>
            <button>View More.</button>
            </div>
            <div className="card-img">
              <img src="/Images/ca1.jpg" alt="img" />
            </div>
          </div>
          <div className="card-gift">
            <div className="card-img">
              <img src="/Images/ca2.jpg" alt="img" />
            </div>
            <div className='card-content'>
              <p>Empire City Casino & Hotel</p>
              <span>Located in the heart of New York, Empire City Casino & Hotel is known for its modern architecture, offering both 
              contemporary rooms and the latest gaming experiences. A sleek design and top-notch services make this an ideal choice for those seeking sophistication.</span>
              <button>View More.</button>
            </div>
          </div>
          <div className="card-gift">
            <div className="card-content">
            <p>The Grand Casino Boutique</p>
            <span>The Grand Casino Boutique offers a cozy yet upscale experience with intimate gaming rooms and a luxurious atmosphere. 
            Perfect for those who want a quieter, more personalized casino experience.</span>
            <button>View More.</button>
            </div>
            <div className="card-img">
              <img src="/Images/ca3.jpg" alt="img" />
            </div>
          </div>


          <div className="card-gift">
            <div className="card-img">
              <img src="/Images/ca4.jpg" alt="img" />
            </div>
            <div className='card-content'>
              <p>Oasis Casino & Resort</p>
              <span>Oasis Casino & Resort is the perfect family destination. It combines a vibrant casino with family-friendly amenities like 
            a kid’s club, pools, and entertainment shows. Enjoy a fun-filled vacation for everyone.</span>
            <button>View More.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
