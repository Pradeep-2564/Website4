import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src="/Images/logo.png" alt="logo" />
          <div className="search">
            <input type="text" placeholder='Search Here' />
            <SearchIcon/>
          </div>
          <div className="nav-info">
            <ul>
              <li><Link to="/" className={({isActive})=> isActive? "active-link" : "no-active"}>Home</Link></li>
              <li><Link to="/Hotels" className={({isActive})=> isActive? "active-link" : "no-active"}>Hotels</Link>
              <ul className="dropdown-content">
                  <li><Link to="/Hotels/Luxury">Luxury Hotels</Link></li>
                  <li><Link to="/Hotels/Botique">Boutique Hotels</Link></li>
                  <li><Link to="/Hotels/Resort">Resort Hotels</Link></li>
                  <li><Link to="/Hotels/Business">Business Hotels</Link></li>
                  <li><Link to="/Hotels/Casino">Casino Hotels</Link></li>
                  
              </ul>
              </li>
              <li className='dropdown'><Link to="/Restaurent" className={({isActive})=> isActive? "active-link" : "no-active"}>Restaurant Types</Link>
              <ul className="dropdown-content">
                  <li><Link to="/Restaurent/Bars">Bars</Link></li>
                  <li><Link to="/Restaurent/Coffee Shops">Coffee Shops</Link></li>
                  <li><Link to="/Restaurent/Bakeries">Bakeries</Link></li>
                  <li><Link to="/Restaurent/Club">Clubes & Night Life</Link></li>
                  <li><Link to="/Restaurent/Wineries">Wineries</Link></li>
                  <li><Link to="/Restaurent/Ghost">Ghost Kitchens</Link></li>
              </ul>
              </li>

              <li><Link to="/Destinations" className={({isActive})=> isActive? "active-link" : "no-active"}>Destinations</Link></li>
              <li><Link to="/Dinning" className={({isActive})=> isActive? "active-link" : "no-active"}>Dinning</Link></li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
