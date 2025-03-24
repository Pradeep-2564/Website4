import React from "react";
import "./Wineries.css";

const Wineries = () => {
  return (
    <div className="wineries">
      <div className="wine-description">
        <h3>
          We believe that the perfect wine enhances the dining experience,
          elevating both the meal and the moment. Our extensive wine list is
          thoughtfully curated to offer a diverse selection of local and
          international wines, each chosen for its unique flavor profile and
          quality. Whether you’re a connoisseur or a casual enthusiast, our wine
          collection is sure to complement every dish on our menu. From crisp
          whites and rich reds to refreshing rosés and sparkling varieties, our
          wines are sourced from some of the finest vineyards around the world.
          Our sommeliers are always on hand to guide you in selecting the
          perfect bottle to pair with your meal, ensuring an unforgettable
          culinary journey.
        </h3>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w1.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Cabernet Sauvignon--</h5>
            <p>Fresh lime, mint, rum, and soda water</p>
            <p>Rs: 3450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w2.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Merlot--</h5>
            <p>
              Light, smooth, and slightly cloudy, with subtle hints of banana
              and clov
            </p>
            <p>Rs: 3350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w3.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Pinot Noir--</h5>
            <p>A refreshing India Pale Ale</p>
            <p>Rs: 2650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w4.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Zinfandel--</h5>
            <p>Tequila, lime juice, and agave syrup</p>
            <p>Rs: 2650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w5.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Malbec--</h5>
            <p>Bourbon, bitters, sugar, and orange peel</p>
            <p>Rs: 2750/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w6.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Tempranillo--</h5>
            <p>Citrus vodka, cucumber, and mint</p>
            <p>Rs: 1950/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w7.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Sangiovese--</h5>
            <p>Rum, pineapple juice, and coconut cream</p>
            <p>Rs: 2750/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w8.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Grenache--</h5>
            <p>
              A crisp and herbaceous cocktail made with gin, cucumber, basil,
              and lime.
            </p>
            <p>Rs: 3250/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="wine-card">
        <div className="wine-img">
          <img src="/Images/w9.jpg" alt="wines" />

          <div className="wine-content">
            <h5>--Chianti--</h5>
            <p>
              A delicate and fragrant blend of lavender syrup, lemon juice, and
              gin, offering a floral, refreshing taste.
            </p>
            <p>Rs: 2050/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wineries;
