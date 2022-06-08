import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><div className='simple-menu'><NavLink to="/#homePage">Home</NavLink></div></li>
            <li><div className='simple-menu'><NavLink to="/#foodPage">Foods</NavLink></div></li>
            <li><div className='simple-menu'><NavLink to="/#servicesPage">Our Services</NavLink></div></li>
            <li><div className='simple-menu'><NavLink to="/#locations">Locations</NavLink></div></li>
            <li><div className='place-orders'><NavLink to='/placeorder'>Place Orders</NavLink></div></li>
            <li><div className='menu-dining'><NavLink to='/dining'>See Menu</NavLink></div></li>
        </ul>
    </div>
  )
}

export default Navbar