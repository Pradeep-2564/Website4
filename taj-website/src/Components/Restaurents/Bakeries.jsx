import React from "react";
import "./Bakeries.css";

const Bakeries = () => {
  return (
    <div className="bakeries">
      <div className="bakery-description">
        <h3>
          Whether you're stopping by for a quick breakfast, a mid-day snack, or
          a special dessert to accompany your coffee, our bakery has something
          for every craving. Pair your choice with a cup of our signature coffee
          or a refreshing beverage, and experience the perfect moment of
          indulgence. Made fresh daily, our bakery items are designed to offer a
          comforting and satisfying experience.
        </h3>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba1.webp" alt="bakery" />

          <div className="bakery-content">
            <h5>--Croissant--</h5>
            <p>
              All-purpose flour, butter, yeast, sugar, salt, water, milk, eggs.
            </p>
            <p>Rs: 250/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba2.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Chocolate Chip Cookies--</h5>
            <p>
              All-purpose flour, butter, brown sugar, granulated sugar, eggs,
              vanilla extract, baking soda, chocolate chips, salt.
            </p>
            <p>Rs: 350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba3.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Blueberry Muffins--</h5>
            <p>
              All-purpose flour, sugar, baking powder, eggs, milk, butter,
              blueberries, vanilla extract, salt.
            </p>
            <p>Rs: 300/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba4.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Cinnamon Rolls--</h5>
            <p>
              All-purpose flour, sugar, yeast, milk, butter, eggs, cinnamon,
              brown sugar, icing sugar.{" "}
            </p>
            <p>Rs: 650/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba5.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Scones--</h5>
            <p>
              All-purpose flour, butter, sugar, milk, eggs, baking powder, salt,
              dried fruits (e.g., raisins, cranberries), vanilla extract.
            </p>
            <p>Rs: 450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba6.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Banana Bread--</h5>
            <p>
              Ripe bananas, all-purpose flour, butter, sugar, eggs, baking soda,
              vanilla extract, salt, walnuts
            </p>
            <p>Rs: 350/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba7.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Brioche--</h5>
            <p> All-purpose flour, butter, sugar, eggs, yeast, milk, salt</p>
            <p>Rs: 450/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba8.jpg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Pretzels--</h5>
            <p>
              All-purpose flour, water, sugar, salt, yeast, baking soda (for
              boiling), egg wash
            </p>
            <p>Rs: 550/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="bakery-card">
        <div className="bakery-img">
          <img src="/Images/ba9.jpeg" alt="bakery" />

          <div className="bakery-content">
            <h5>--Madeleines--</h5>
            <p>
              All-purpose flour, butter, sugar, eggs, lemon zest, vanilla
              extract, baking powder, salt.
            </p>
            <p>Rs: 250/-</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bakeries;
