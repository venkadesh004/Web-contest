import React from 'react';
import './items.css';

const Items = ({ food, heading, description }) => {
  return (
    <div className='foodItems-content'>
      <div className='food-items-image'>
        <img src={ food } alt="" />
      </div>
      <div className='food-items-info'>
        <h1 className='food-items-info-heading'>{ heading }</h1>
        <p className='food-items-info-descp'>{ description }</p>
      </div>
    </div>
  )
}

export default Items