import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer-log0">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod3/825ed139eadf75b55b920457fcd793fa8d424f50-112x38.png" alt="footer-logo" />
        </div>

        <div className="content-container">
            <div className="footer-info">
                <div className="info1">
                    <span>SUBSCRIBE FOR LATEST UPDATES</span>
                </div>
                <div className="input-sub">
                    <label htmlFor="">Enter your email Address</label>
                    <div className="text-field">
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <button className='btn-sub'>SUBSCRIBE</button>
                <div></div>
                <div className="contact1-container">
                    <div className="contact1-content">
                        <div className="cont-info">
                            <span>FOR BOOKINGS CONTACT</span>
                            <a href="1-800-111-825">1-800-111-825</a>
                            <span>reservations@ihcltata.com</span>
                        </div>
                        <div className="cont-info">
                            <span>CUSTOMER SUPPORT</span>
                            <a href="contacttaj@tajhotels.com">
                                <span>contacttaj@tajhotels.com</span>
                            </a>
                            <span>website.feedback@tajhotels.com</span>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <span>QUICK LINKS</span>
                <div className="foot-info2">
                    <div className="all-infos">
                        <span><a href="">Hotels</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">About Taj</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Dining</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">
                        Holidays</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Wellness</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Offers</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Timeless</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Gifting</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Weddings</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Event Venues</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">
                        Neupass</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Taj Magazine</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Epicure</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Sitemap</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Taj Blog</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">HSBC Taj Credit</a></span>
                    </div>
                    <div className="all-infos">
                        <span><a href="">Card</a></span>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-links">
                    <div className="titel">
                        <span>CONNECT WITH US</span>
                    </div>
                    <div className="icons-footer">
                        <div className="icons">
                            <a href=""><FacebookIcon/></a>
                        </div>
                        <div className="icons">
                            <a href=""><XIcon/></a>
                        </div>
                        <div className="icons">
                            <a href=""><InstagramIcon/></a>
                        </div>
                        <div className="icons">
                            <a href=""><YouTubeIcon/></a>
                        </div>
                        <div className="icons">
                            <a href=""><LinkedInIcon/></a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            
        </div>
        <hr />
        <div className="copy-right">
            <span id='copy'>© 2025 The Indian Hotels Company Limited. All Rights Reserved.</span>
        </div>
      
    </div>
  )
}

export default Footer
