import React from 'react';

import './restaurantDetail.css';

const RestaurantDetail = ({ img, addressLine1, addressLine2 }) => {
  return (
    <div className='detailed-restaurant'>
        <div className="detailed-restaurant-inside">
            <div className="detailed-restaurant-image">
                <img src={ img } alt="" />
            </div>
            <div className="detailed-restaurant-content">
                <p className='detailed-restaurant-content-heading'>The Eastern</p>
                <p className='detailed-restaurant-content-address'>{ addressLine1 }<br/>{ addressLine2 }</p>
            </div>
        </div>
    </div>
  )
}

export default RestaurantDetail