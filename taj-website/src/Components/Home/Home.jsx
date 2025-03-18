import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";
const data = [
  { id: 2, image: "/Images/h2.jpg" },
  { id: 1, image: "/Images/h1.jpg" },
  { id: 3, image: "/Images/h3.jpg" },
  { id: 4, image: "/Images/h4.jpg" },
  { id: 5, image: "/Images/h5.jpg" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div>
      <div className="image-container">
        <div className="image-wrapper">
          <div>
            <img
              src={data[currentIndex].image}
              alt={data.id}
              className="image fade-animation"
            />
          </div>

          <button className="corner-button bottom-left" onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button className="corner-button bottom-right" onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className="greeting">
        <h1 style={{ textAlign: "center" }}>
          "Hospitality is not just about serving food and drinks; it's about
          creating an experience where guests feel valued, welcomed, and at
          home."
        </h1>
      </div>
      <section className="quotes-sec">
        <div className="quotes">
          <div className="quotes-content">
            <i>
              "You don't need a silver fork to eat good food." – Paul Prudhomme
            </i>
          </div>
          <div className="quotes-content">
            <i>
              Food is symbolic of love when words are inadequate." – Alan D.
              Wolfelt
            </i>
          </div>
          <div className="quotes-content">
            <i>
              There is no sincerer love than the love of food." – George Bernard
              Shaw
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "People who love to eat are always the best people." – Julia Child
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "I drink to make other people more interesting." – Ernest
              Hemingway
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "Too much of anything is bad, but too much good whiskey is barely
              enough." – Mark Twain
            </i>
          </div>
          <div className="quotes-content">
            <i>
              Drink because you are happy, but never because you are miserable."
              – G.K. Chesterton
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "Eat, drink, and be merry, for tomorrow we die." – Old English
              Proverb
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "In wine, there is wisdom. In beer, there is freedom. In water,
              there is bacteria." – Benjamin Franklin
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "Beer is proof that God loves us and wants us to be happy." –
              Benjamin Franklin
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "Good times + Crazy friends = Amazing memories." – Julius Caesar
            </i>
          </div>
          <div className="quotes-content">
            <i>
              "Find a group of people who challenge and inspire you, spend a lot
              of time with them, and it will change your life." – Amy Poehler
            </i>
          </div>
        </div>
        <div className="bio-content">
          <div className="description">
            <h1>What we believe in ?</h1>

            <p>
              <b>
                Food is more than just a necessity; it is a universal language
                that brings people together. Whether it’s a simple homemade meal
                or an extravagant feast, food has the power to create memories,
                evoke emotions, and foster connections. It’s a celebration of
                culture, tradition, and creativity, offering endless
                possibilities to explore new flavors, textures, and experiences.
                At its core, food is an expression of love, care, and sharing,
                making every meal an opportunity to enjoy life’s simplest
                pleasures.
              </b>
            </p>
          </div>
        </div>
      </section>
      <h1 style={{textAlign:"center", marginTop:"10px"}}> What We Offer you? </h1>
      <section className="rest-info">
        
        <div className="card">
          <div className="info-img">
            <img src="/Images/hotel1.jpg" alt="Hotels" />
          </div>
           <div className="card-content">
              <h4>Hotels For Stay</h4>
              <p>
                We believe in creating a seamless and exceptional experience for
                every guest. Our offerings are designed to ensure your stay is
                both comfortable and unforgettable. Here's what you can expect
                when you choose us for your stay
              </p>
            </div>
          
        </div>
        <div className="card">
          
          <div className="info-img">
            <img src="/Images/restaurant.jpg" alt="Restaurents" />
          </div>
            <div className="card-content">
            <h4>Premium Restaurants</h4>
              <p>
                Our restaurant is designed to offer a cozy, welcoming atmosphere
                for any occasion. With stylish interiors, intimate lighting, and
                comfortable seating, it’s the perfect setting for a romantic
                dinner, family gathering, or business meeting. Whether you're
                indoors or dining al fresco, we promise a pleasant experience
                every time.
              </p>
            </div>
          
        </div>
        <div className="card2">
          
          <div className="info-img">
            <img src="/Images/destination.jpg" alt="Destinations" />
          </div>
            <div className="card-content">
              <h4>Worldclass Destinations</h4>
              <p>
                Our rooms and suites are crafted with elegance and comfort in
                mind. Whether you prefer a standard room or a luxurious suite,
                each space is designed with your relaxation in mind, featuring
                modern amenities, plush bedding, and stunning views of your
                destinations
              </p>
            </div>
          
        </div>
        <div className="card2">
         
          <div className="info-img">
            <img src="/Images/dinning.jpg" alt="Dinning Halls" />
          </div>
            <div className="card-content">
              <h4>5 ⭐ Dinning Halls</h4>
              <p>
                Indulge in an array of culinary delights at our in-house
                restaurants. From international cuisines to local flavors, our
                expert chefs ensure every meal is a celebration of taste. Enjoy
                a casual meal by the pool or a fine dining experience with
                breathtaking views.
              </p>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
