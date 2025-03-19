import React from 'react'
import './Luxury.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Luxury = () => {
  return (
    <div className='luxury-hotels'>
      <div className="hero-luxury">
        <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/b4ad9a6d9bbdfc0f957b9c86360fd411c135f1be-3840x1860.jpg?w=768&auto=format&dpr=2" alt="img" />
      </div>
      <div className="sec-head">
          <h1>HOTELS IN AHMEDABAD</h1>
        </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/29c21ae5f5cadfbf9d2ec8d5c587a7032e6974f6-1720x1112.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>TAJ SKYLINE, AHMEDABAD</p>
            <FmdGoodIcon/><span>Sankalp Square III, Sindhu Bhavan, Bodakdev, Ahmedabad, Gujarat, 380059, India</span>
            <p>Discover elegance and modern luxury at Taj Skyline, Ahmedabad, where personalized service and sophisticated design elevate your stay.</p>
            <LocalPhoneIcon/> +91 7940400000 <br />
            <MailIcon/>reservations.ahmedabad@tajhotels.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/c791b8aa116f83bf0621029b1dedca02ca5f915e-1720x1112.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>VIVANTA AHMEDABAD, SG HIGHWAY</p>
            <FmdGoodIcon/><span>147/53 Sarkhej-Gandhinagar Highway, Opposite Bhagwat Vidhya Peeth, Ahmedabad, Gujarat, 380061 , India</span>
            <p>Immerse yourself in vibrant Gujarat at Vivanta Ahmedabad, SG Highway, where our stylish hotel combines modern luxury with the vivacious</p>
            <LocalPhoneIcon/> +91 79-35553555 <br />
            <MailIcon/>bookvivanta.ahmedabad@tajhotels.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/77852c5bdbc575a806c6e3fa22531a8f8519b806-1140x746.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>GINGER AHMEDABAD, RTO CIRCLE</p>
            <FmdGoodIcon/><span>132ft Ring Road, RTO Circle, Ahmedabad, Gujarat , 380027, India</span>
            <p>Experience the heart of Ahmedabad's RTO Circle area with Ginger, promising a smart, comfortable, and well-connected stay in this thriving part of the city.</p>
            <LocalPhoneIcon/> +91 79692 34133<br />
            <MailIcon/> reservations@gingerhotels.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/e36b736ae9c0e991ab29e9c5b14d78baab7fcecd-1140x746.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>GINGER AHMEDABAD, SATELLITE</p>
            <FmdGoodIcon/><span>Opp. Rajpath Club, Next to Gordhan Thal, S.G. Road, Bodakdev, Ahmedabad, Gujarat, 380054, India</span>
            <p>Discover the heart of Ahmedabad's Satellite area with Ginger, ensuring a smart, comfortable, and well-connected stay in this bustling part of the city.</p>
            <LocalPhoneIcon/>  +91 87329 16308<br />
            <MailIcon/>reservations@gingerhotels.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/60f6d48ddf299b1ca5983336d224fcae6e735cea-1140x746.jpg?w=768&auto=format&dpr=2" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>
            GINGER AHMEDABAD, SG ROAD</p>
            <FmdGoodIcon/><span>10/2, Opp. The Grand Bhagwati, S.G.Road, Bodakdev, Ahmedabad, Gujarat, 380054, India</span>
            <p>Immerse yourself in the vibrant S.G. Road neighborhood of Ahmedabad with Ginger, promising convenience, comfort, and a memorable stay in this thriving area.</p>
            <LocalPhoneIcon/> +91 87329 16308<br />
            <MailIcon/> reservations@gingerhotels.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Luxury
