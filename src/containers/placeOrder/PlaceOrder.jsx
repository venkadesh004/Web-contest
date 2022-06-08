import React from 'react';
import './placeOrder.css';

import { Circles, NavBar, Restaurants } from '../../components';
import Footer from '../footer/Footer';

import ChefHat from '../../assets/eatern_hat.png';
import { NavLink } from 'react-router-dom';

const PlaceOrder = () => {
  return (
    <div className='placeorder'>
        <div className="placeorder-content">
            <div className="page-content">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="placeorder-page-content">
                    <div className="placeorder-page-first-half">
                        <div className="placeorder-page-first-half-content">
                            <div className="chef-hat-image">
                                <img src={ ChefHat } alt="" />
                            </div>
                            <p className='placeorder-heading'>
                                Place Your Order Now!!
                            </p>
                            <form action="" className='placeorder-form'>
                                <input type="text" placeholder='Your name'/>
                                <textarea name="address" placeholder='Your address' cols="30" rows="10"></textarea>
                                <div className="submission-btns">
                                    <button type='submit' className='buttonColor'><NavLink to='/dining'><p>Go to Food Select</p></NavLink></button>
                                    <button type='submit' className='normalButtonColor'><NavLink to="/"><p>Go Back</p></NavLink></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="placeorder-page-second-half">
                        <Restaurants />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
        <div className="circle10">
            <Circles diameter={ '780px' } />
        </div>
    </div>
  )
}

export default PlaceOrder