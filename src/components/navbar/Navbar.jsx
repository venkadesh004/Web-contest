import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><div className='simple-menu'><a href="#homePage">Home</a></div></li>
            <li><div className='simple-menu'><a href="#foodPage">Foods</a></div></li>
            <li><div className='simple-menu'><a href="#servicesPage">Our Services</a></div></li>
            <li><div className='simple-menu'><a href="#locations">Locations</a></div></li>
            <li><div className='place-orders'><a href="">Place Orders</a></div></li>
        </ul>
    </div>
  )
}

export default Navbar