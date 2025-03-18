import React from "react";
import "./Bars.css";

const Bars = () => {
  return (
    <div className="bars">
      <div className="bars-description">
        <h3>
          Unwind at our vibrant bar, where expertly crafted cocktails,
          refreshing beers, and an extensive wine list await. Whether you're
          here for a lively happy hour or a relaxed evening with friends, our
          inviting atmosphere and signature drinks make every moment special.
        </h3>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b1.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Mojito--</h5>
            <p>Fresh lime, mint, rum, and soda water</p>
            <p>Rs: 450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b2.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Beers--</h5>
            <p>
              Light, smooth, and slightly cloudy, with subtle hints of banana
              and clov
            </p>
            <p>Rs: 350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b3.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Craft IPA--</h5>
            <p>A refreshing India Pale Ale</p>
            <p>Rs: 650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b4.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Margarita--</h5>
            <p>Tequila, lime juice, and agave syrup</p>
            <p>Rs: 650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b5.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Old Fashioned--</h5>
            <p>Bourbon, bitters, sugar, and orange peel</p>
            <p>Rs: 750/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b6.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Summer Breeze--</h5>
            <p>Citrus vodka, cucumber, and mint</p>
            <p>Rs: 950/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b7.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Tropical Storm--</h5>
            <p>Rum, pineapple juice, and coconut cream</p>
            <p>Rs: 750/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b8.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--The Green Garden--</h5>
            <p>
              A crisp and herbaceous cocktail made with gin, cucumber, basil,
              and lime.
            </p>
            <p>Rs: 1250/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bar-card">
        <div className="bar-img">
          <img src="/Images/b9.jpg" alt="Bars" />

          <div className="bar-content">
            <h5>--Lavender Lemonade--</h5>
            <p>
              A delicate and fragrant blend of lavender syrup, lemon juice, and
              gin, offering a floral, refreshing taste.
            </p>
            <p>Rs: 1050/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bars;
