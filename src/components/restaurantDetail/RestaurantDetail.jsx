import React from 'react';

import Restaurant1 from '../../assets/services-page-hotel.jpg';

import './restaurantDetail.css';

const RestaurantDetail = () => {
  return (
    <div className='detailed-restaurant'>
        <div className="detailed-restaurant-inside">
            <div className="detailed-restaurant-image">
                <img src={ Restaurant1 } alt="" />
            </div>
            <div className="detailed-restaurant-content">
                <p className='detailed-restaurant-content-heading'>The Eastern</p>
                <p className='detailed-restaurant-content-address'>160A/23, Thiruparakundram,<br/>Thirumangalam</p>
            </div>
        </div>
    </div>
  )
}

export default RestaurantDetail