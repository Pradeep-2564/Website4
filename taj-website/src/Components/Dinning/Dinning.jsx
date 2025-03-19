import React from 'react'
import './Dinning.css'

const Dinning = () => {
  return (
    <>
      <div className="hero">
        <div className="dinning-hero-img">
          <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/6a5b2fa52841e502e88b42bd04bad8a0e90e1d5d-3840x1860.jpg?w=768&auto=format&dpr=2" alt="dinning" />
        </div>
      </div>
      <div className="hero-titel">
        <div className="hero-text">
          <div>
            <h2>Fine Dining at Taj Restaurants</h2>
          </div>
          <div>
            <span>Embark on a journey of exquisite experiences for the discerning connoisseur, seamlessly woven together with impeccable service, sophisticated ambience and masterful culinary artistry. </span>
          </div>
        </div>
      </div>
      <div className="slick-list">
        <div className="slick-track">
          <div className="item">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="content-item">
            <h4>LEGENDARY RESTAURANTS​</h4>
            <div className="matter">
              <span>A collection of restaurants recognised for unparalleled <br />dining experiences</span>
            </div>
          </div>
        </div>
        <div className="slick-track">
          <div className="item">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/a02ecadcd4a5ec735d7f0ae8d0d5b477ec1eb343-950x1020.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="content-item">
            <h4>SIGNATURE RECIPES</h4>
            <div className="matter">
              <span>Each a testament to our culinary passion <br />and honed over years of dedication.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gift-container">
        <div className="gift-head">
          <p>Giftable Dining Delights</p>
        </div>
        <div className="gift-cards">
          <div className="card-gift">
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/23ee30e79f9dca4e1ccb916f9ebd30ed192956a7-1400x979.jpg?w=768&auto=format&dpr=2" alt="img" />
            </div>
            <div className='card-content'>
              <p>Hampers</p>
              <span>A collection of thoughtfully curated hampers that are designed to convey your warmest thoughts and greetings with an array of gour...</span>
            </div>
          </div>
          <div className="card-gift">
            <div className="card-content">
            <p>Taj Experiences Gift Cards</p>
            <span>Offering a range of exclusive and exquisite dining experiences, Taj Experiences Gift Cards make for a perfect present for your..</span>
            </div>
            <div className="card-img">
              <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/29ea05d58761635f5ee2ff674ea7d1637840a116-700x480.jpg?w=768&auto=format&dpr=2" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dinning
