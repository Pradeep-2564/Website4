import React from 'react'
import './Destinations.css'


const Destinations = () => {
  return (
    <div>
      <div className="hero-sec">
        <div className="hero-img">
          <img src="https://i.pinimg.com/originals/b9/39/41/b93941902840fca3eb465e0d5eea5218.jpg" alt="" />
        </div>
        <div className="hero-content">
          <h1>
            <div className="text-cont">
              <hr />
              <span>Our Destinations</span>
            </div>
          </h1>
        </div>
      </div>
      <div className="hero-main">
          <div className="main-text">
            <div className="greet-titel">
              <hr />
              <h2>
                <div className="text-titel">
                  <span id='titel'>The World Awaits</span>
                </div>
              </h2>
              <hr />
            </div>
            <div className="greet-titel">
              <span>The world is full of amazing experiences. Allow us to show you just how wonderful they can be with our luxury hotels.</span>
            </div>
          </div>
        </div>
        <div className="search-filter">
          <div className="search-bar">
            <input type="text" placeholder='Destination / City' id='search-box'/>
          </div>
          <div className="brands">
            <select>
              <option value="Brands">Brands</option>
              <option value="Taj">Taj</option>
              <option value="Gateway">Gateway</option>
              <option value="Tree of Life">Tree of Life</option>
              <option value="Vivanta">Vivanta</option>
            </select>
          </div>
          <div className="themes">
            <select>
              <option value="Themes">Themes</option>
              <option value="Adventure">Adventure</option>
              <option value="Beach">Beach</option>
              <option value="City Hotels">City Hotels</option>
              <option value="Couples">Couples</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default Destinations
