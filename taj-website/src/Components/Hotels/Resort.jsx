import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Resort = () => {
  return (
    <div>
       <div className="business-head">
        <div className="busi-img">
          <img
            src="https://www.manahotels.in/traveller/wp-content/uploads/2016/02/Oberoi-Vanyavilas-Sawai-Madhopur.jpg" alt="img"/>
        </div>
        <div className="busi-content">
          <h1>
            <div className="busi-cont">
              <span>RESORT SERVICES</span>
            </div>
          </h1>
        </div>
      </div>
      <div className="sec-head">
          <h1>RESORT'S IN HYDERABAD</h1>
        </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://pix8.agoda.net/hotelImages/32264138/0/7b64d9f703719a79b5f10947a3ec7be8.jpeg?ce=0&s=600x" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>Monday Hotels HITEC City</p>
            <FmdGoodIcon /><span>White Fields, Gachibowli, Hyderabad, India, 500084</span>
            <p>Located in the bustling tech hub of Gachibowli, Hyderabad, Monday Hotels HITEC City is ideal for solo travelers seeking comfort and convenience. Explore the vibrant cultural scene with the Shilparamam Cultural Society just 1.5 km away.</p>
            <LocalPhoneIcon/> +91 7940400000 <br />
            <MailIcon/>mondayhotels@gmail.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://pix8.agoda.net/hotelImages/110343/0/0da977976520aa5f318b9f30f6dd0c69.jpeg?ce=0&s=600x" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>Hotel IK London Residency</p>
            <FmdGoodIcon /><span>Kapadia Ln, Banjara Hills, Hyderabad, India, 500082</span>
            <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Banjara Hills, allowing you access and proximity to local attractions and sights.</p>
            <LocalPhoneIcon/> +91 79404076500 <br />
            <MailIcon/>hotellondonR@gmail.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/644050754.jpg?k=b51a60be281c9bf2ac8ed40d6e4e5c5ffba23eaae2c4f350effc619f7061d654&s=600x" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>Sheraton Hyderabad Hotel</p>
            <FmdGoodIcon /><span>115/1 Nanakramguda Financial District, Gachibowli, Hyderabad, India, 500032</span>
            <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Gachibowli part of Hyderabad, this property puts you close to attractions and interesting dining options.</p>
            <LocalPhoneIcon/> +91 7940400000 <br />
            <MailIcon/>sheratonhotel@gmail.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://pix8.agoda.net/hotelImages/21648576/0/fa62a0e623a5bbe94a87a97cc0d4c2d0.jpg?ca=17&ce=1&s=600x" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>Novotel Hyderabad Convention Centre - An AccorHotels Brand</p>
            <FmdGoodIcon /><span>Novotel & HICC Complex, (Near Hitec City), P.O. Bag 1101, Gachibowli, Hyderabad, India, 500081</span>
            <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Gachibowli part of Hyderabad, this property puts you close to attractions and interesting dining options.</p>
            <LocalPhoneIcon/> +91 7940456500 <br />
            <MailIcon/>Novotel@gmail.com
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="hotels-info">
          <div className="hotels-img">
            <img src="https://pix8.agoda.net/hotelImages/63059087/0/d30785dcfd19544228d1184ec24b05f5.jpg?ce=0&s=600x" alt="img" />
          </div>
          <div className="hotel-data">
            <p id='hotel-name'>Frenotel Secunderabad</p>
            <FmdGoodIcon /><span>2-3-577, Minister Rd, D.V.Colony, Nallagutta, Ramgopalpet, Near Kim s Hospital, Secunderabad, Hyderabad, India, 500003</span>
            <p>Nestled in the heart of Secunderabad, Frenotel offers solo travelers an ideal stay with its proximity to the vibrant markets and transport hubs of historic Hyderabad.</p>
            <LocalPhoneIcon/> +91 79406545500 <br />
            <MailIcon/>Frenotel@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resort
