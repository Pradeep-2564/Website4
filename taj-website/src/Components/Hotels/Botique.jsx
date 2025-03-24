import React from 'react'
import './Botique.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Botique = () => {
  return (
    <div className='botique'>
      <div className="hero-botique">
        <img src="/Images/bo-bgc.jpg" alt="img" />
      </div>
      <div className="botique-head">
          <h1>HOTELS IN AHMEDABAD</h1>
        </div>
      <div className="botique-container">
        <div className="botique-info">
          <div className="botique-img">
            <img src="/Images/bo1.jpg" alt="img" />
          </div>
          <div className="botique-data">
            <p id='botique-name'>TAJ SKYLINE, AHMEDABAD</p>
            <FmdGoodIcon/><span>Sankalp Square III, Sindhu Bhavan, Bodakdev, Ahmedabad, Gujarat, 380059, India</span>
            <p>Discover elegance and modern luxury at Taj Skyline, Ahmedabad, where personalized service and sophisticated design elevate your stay.</p>
            <LocalPhoneIcon/> +91 7940400000 <br />
            <MailIcon/>reservations.ahmedabad@tajhotels.com
          </div>
        </div>
      </div>
      <div className="botique-container">
        <div className="botique-info">
          <div className="botique-img">
            <img src="/Images/bo2.jpg" alt="img" />
          </div>
          <div className="botique-data">
            <p id='botique-name'>VIVANTA AHMEDABAD, SG HIGHWAY</p>
            <FmdGoodIcon/><span>147/53 Sarkhej-Gandhinagar Highway, Opposite Bhagwat Vidhya Peeth, Ahmedabad, Gujarat, 380061 , India</span>
            <p>Immerse yourself in vibrant Gujarat at Vivanta Ahmedabad, SG Highway, where our stylish botique combines modern luxury with the vivacious</p>
            <LocalPhoneIcon/> +91 79-35553555 <br />
            <MailIcon/>bookvivanta.ahmedabad@tajhotels.com
          </div>
        </div>
      </div>
      <div className="botique-container">
        <div className="botique-info">
          <div className="botique-img">
            <img src="/Images/bo3.jpg" alt="img" />
          </div>
          <div className="botique-data">
            <p id='botique-name'>GINGER AHMEDABAD, RTO CIRCLE</p>
            <FmdGoodIcon/><span>132ft Ring Road, RTO Circle, Ahmedabad, Gujarat , 380027, India</span>
            <p>Experience the heart of Ahmedabad's RTO Circle area with Ginger, promising a smart, comfortable, and well-connected stay in this thriving part of the city.</p>
            <LocalPhoneIcon/> +91 79692 34133<br />
            <MailIcon/> reservations@gingerhotels.com
          </div>
        </div>
      </div>
      <div className="botique-container">
        <div className="botique-info">
          <div className="botique-img">
            <img src="/Images/bo4.jpg" alt="img" />
          </div>
          <div className="botique-data">
            <p id='botique-name'>GINGER AHMEDABAD, SATELLITE</p>
            <FmdGoodIcon/><span>Opp. Rajpath Club, Next to Gordhan Thal, S.G. Road, Bodakdev, Ahmedabad, Gujarat, 380054, India</span>
            <p>Discover the heart of Ahmedabad's Satellite area with Ginger, ensuring a smart, comfortable, and well-connected stay in this bustling part of the city.</p>
            <LocalPhoneIcon/>  +91 87329 16308<br />
            <MailIcon/>reservations@gingerhotels.com
          </div>
        </div>
      </div>
      <div className="botique-container">
        <div className="botique-info">
          <div className="botique-img">
            <img src="/Images/bo5.jpg" alt="img" />
          </div>
          <div className="botique-data">
            <p id='botique-name'>
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

export default Botique
