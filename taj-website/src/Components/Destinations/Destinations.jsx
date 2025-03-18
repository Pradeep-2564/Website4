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
      <div className="place-container">
        <div className="cards">
          <div className="place-cards">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/dde040ba6aff98893f157008caaa0ba0670384a6-1720x1112.jpg?w=768&auto=format&dpr=2" alt="card1" />
          </div>
          <div className="card-content">
            <h3>St. James' Court, A Taj Hotel</h3>
            <span>Immerse in London's history and style at St. James' Court, a Taj Hotel, offering a blend of Victorian grandeur and conte..</span>
            <div className="book-btn">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="place-cards">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/0320dcc4260811999fd91dcfbdaf29263ef03227-1720x1112.jpg?w=768&auto=format&dpr=2" alt="card2" />
          </div>
          <div className="card-content">
            <h3>The Pierre, A Taj Hotel, New York</h3>
            <span>Experience timeless elegance at The Pierre, where Taj's hospitality meets New York's luxury, offering sophistication and..</span>
            <div className="book-btn">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="place-cards">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/755516a1ccee23175ce67a8a8d7752950481f4d9-1720x1112.jpg?w=768&auto=format&dpr=2" alt="card3" />
          </div>
          <div className="card-content">
            <h3>Taj Lands End, Mumbai</h3>
            <span>Indulge in experiences overlooking the Arabian Sea, where warm hospitality meets stunning views and culinary delights..</span>
            <div className="book-btn">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="place-cards">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/d09219cee0bfd3643f3117dd2305a762be428341-1720x1112.jpg?w=768&auto=format&dpr=2" alt="card4" />
          </div>
          <div className="card-content">
            <h3>The Taj Mahal Palace, Mumbai</h3>
            <span>Marvel at the seamless blend of historical opulence and modern luxury at The Taj Mahal Palace, Mumbai, offering stunning..</span>
            <div className="book-btn">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
