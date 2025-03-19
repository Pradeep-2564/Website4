import React from "react";
import "./Coffee.css";

const Coffee = () => {
  return (
    <div className="coffes">
      <div className="coffee-description">
        <h3>
          Our signature house blend is a carefully crafted fusion of bold, rich
          flavors. Each cup is brewed to perfection, with a smooth, balanced
          taste that combines a mild acidity with a deep, roasted richness. The
          result is a satisfying and aromatic experience, with subtle hints of
          chocolate and caramel. Whether you prefer it black or with a splash of
          cream, this coffee is the perfect way to start your day or enjoy a
          relaxing afternoon.
        </h3>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c1.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Espresso--</h5>
            <p>Freshly ground espresso coffee beans Water</p>
            <p>Rs: 250/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c2.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Americano--</h5>
            <p>
            Espresso, Hot water
            </p>
            <p>Rs: 350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c3.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Cappuccino--</h5>
            <p>Espresso, Steamed milk, Milk Foam</p>
            <p>Rs: 300/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c4.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Latte--</h5>
            <p>A small layer of milk foam, Espresso, Steamed milk </p>
            <p>Rs: 650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c5.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Flat White--</h5>
            <p>Espresso, Steamed milk</p>
            <p>Rs: 450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c6.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Mocha--</h5>
            <p>Espresso, Steamed milk, Chocolate syrup</p>
            <p>Rs: 350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c7.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Macchiato--</h5>
            <p>Espresso, A small amount of steamed milk or milk foam</p>
            <p>Rs: 450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c8.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>--Cortado--</h5>
            <p>
            Espresso, Equal parts steamed milk</p>
            <p>Rs: 550/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="coffee-card">
        <div className="coffee-img">
          <img src="/Images/c9.jpg" alt="coffee" />

          <div className="coffee-content">
            <h5>-- Cold Brew--</h5>
            <p>
            Coarsely ground coffee beans, Cold water
            </p>
            <p>Rs: 1050/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
