import React from "react";
import "./Business.css";

const Business = () => {
  return (
    <div>
      <div className="business-head">
        <div className="busi-img">
          <img
            src="https://cdn.sanity.io/images/ocl5w36p/prod3/2e233f3376a2e77d258d41940ad957ab2204a16f-3840x1320.jpg?w=768&auto=format&dpr=2" alt=""/>
        </div>
        <div className="busi-content">
          <h1>
            <div className="busi-cont">
              <span>CORPORATE SERVICES</span>
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
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/676bbb701cab6731b5972137c7e84f8ed66fd172-700x480.png?w=768&auto=format&dpr=2" alt="img" />
            </div>
            <div className='card-content'>
              <p>Business Dining</p>
              <span>Taj hotels are home to dozens of top-rated culinary experiences in cities across the world. Whether you’re looking to sample a new cuisine, or discuss prospects and grow relationships a world of flavours awaits.</span>
            </div>
          </div>
          <div className="card-gift">
            <div className="card-content">
            <p>Preferential rates</p>
            <span>Revel in the legendary hospitality of Taj with member exclusive offers on a full range of corporate travel solutions and travel services. Enjoy special offers and packages for long-awaited holidays with loved ones, organisational engagements and more.</span>
            </div>
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/481470887327ea035339b267c879510b5d35ce0b-700x480.png?w=768&auto=format&dpr=2" alt="img" />
            </div>
          </div>
          <div className="card-gift">
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/485a7e3df8d3d80b055ea19d162bba9baa43facc-9018x5542.jpg?w=768&auto=format&dpr=2" alt="img" />
            </div>
            <div className='card-content'>
              <p>Multi User Accounts</p>
              <span>Corporate travel management can be a challenge for larger organisations. But Taj’s innovative business travel solutions make large-scale experiences seamless and more rewarding than ever before. Welcome to a world of enhanced privileges and benefits.</span>
            </div>
          </div>
          <div className="card-gift">
            <div className="card-content">
            <p>Business Gifting</p>
            <span>Nurture your connections with the gift of Taj. From partners, customers, and employees to family and potential clients—everyone gains. Our iconic venues, top-notch spa indulgences, corporate travel solutions, and legendary service make ideal presents.</span>
            </div>
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/753079f9e05de934c426e5bb0831aaa1449696f3-6720x4480.jpg?w=768&auto=format&dpr=2" alt="img" />
            </div>
          </div>


          <div className="card-gift">
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/a638efb6517ff882ab550ce281c44ecf70c196cc-700x480.jpg?w=768&auto=format&dpr=2" alt="img" />
            </div>
            <div className='card-content'>
              <p>CONFERENCES AND EVENTS</p>
              <span>Discover our exceptional array of spaces designed for remarkable events. From city hotels to serene beach and hill resorts, explore royal palaces and diverse event venues for your next gathering.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
