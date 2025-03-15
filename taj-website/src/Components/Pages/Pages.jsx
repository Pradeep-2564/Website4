import React from 'react'
import Navbar from '../Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Hotels from '../Hotels/Hotels'
import Restaurents from '../Restaurents/Restaurents'
import Destinations from '../Destinations/Destinations'
import Dinning from '../Dinning/Dinning'
import Luxury from '../Hotels/Luxury'
import Botique from '../Hotels/Botique'
import Resort from '../Hotels/Resort'
import Business from '../Hotels/Business'
import Casino from '../Hotels/Casino'
import Bars from '../Restaurents/Bars'
import Coffee from '../Restaurents/Coffee'
import Bakeries from '../Restaurents/Bakeries'
import Clubs from '../Restaurents/Clubs'
import Wineries from '../Restaurents/Wineries'
import GhostKitchens from '../Restaurents/GhostKitchens'


const Pages = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
      <div>
        <Navbar/>
        <Home/>
      </div>
      ),
    },
    
    {
      path: '/Hotels',
      element: (
      <div>
        <Navbar/>
        <Hotels/>
      </div>
      ),
    },
    {
      path: '/Hotels/Luxury',
      element: (
      <div>
        <Navbar/>
        <Luxury/>
      </div>
      ),
    },
    {
      path: '/Hotels/Botique',
      element: (
      <div>
        <Navbar/>
        <Botique/>
      </div>
      ),
    },
    {
      path: '/Hotels/Resort',
      element: (
      <div>
        <Navbar/>
        <Resort/>
      </div>
      ),
    },
    {
      path: '/Hotels/Business',
      element: (
      <div>
        <Navbar/>
        <Business/>
      </div>
      ),
    },
    {
      path: '/Hotels/Casino',
      element: (
      <div>
        <Navbar/>
        <Casino/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent',
      element: (
      <div>
        <Navbar/>
        <Restaurents/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Bars',
      element: (
      <div>
        <Navbar/>
        <Bars/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Coffee Shops',
      element: (
      <div>
        <Navbar/>
        <Coffee/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Bakeries',
      element: (
      <div>
        <Navbar/>
        <Bakeries/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Club',
      element: (
      <div>
        <Navbar/>
        <Clubs/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Wineries',
      element: (
      <div>
        <Navbar/>
        <Wineries/>
      </div>
      ),
    },
    
    {
      path: '/Restaurent/Ghost',
      element: (
      <div>
        <Navbar/>
        <GhostKitchens/>
      </div>
      ),
    },
    
    {
      path: '/Destinations',
      element: (
      <div>
        <Navbar/>
        <Destinations/>
      </div>
      ),
    },
    
    {
      path: '/Dinning',
      element: (
      <div>
        <Navbar/>
        <Dinning/>
      </div>
      ),
    },
    
   

  ]) 
  return (
    <div>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  )
}

export default Pages
