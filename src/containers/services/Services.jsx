import React from 'react';
import './services.css';

import CookImage from '../../assets/services-page-cook.jpg';
import HotelImage from '../../assets/services-page-hotel.jpg';

import { Circles } from '../../components';

const Services = () => {
  return (
    <section id="servicesPage"> 
      <div className="services-page-main">
        <div className="services-page-content">
          <div className="services-page-content-col1">
            <div className="services-page-content-col1-image">
              <img src={ CookImage } alt="" />
            </div>
            <div className="services-page-content-col1-des">
              <div className="side-rectangle-col1"></div>
              <div className="services-page-descp-col1">
                <p>The Taste reflects<br/>the love<br/>we give to you</p>
              </div>
            </div>
          </div>
          <div className="services-page-content-col2">
            <div className="services-page-content-col1-image">
              <img src={ HotelImage } alt="" />
            </div>
            <div className="services-page-content-col2-des">
              <div className="side-rectangle-col1"></div>
              <div className="services-page-descp-col2">
                <p>And The Quality<br/>reflects the Respect<br/>to you</p>
              </div>
            </div>
          </div>
        </div>
        <div className='circle-cook-back'>
          <Circles diameter={ '450px' } />
        </div>
        <div className='circle-hotel-back'>
          <Circles diameter={ '320px' } />
        </div>
      </div>
    </section>
  )
}

export default Services