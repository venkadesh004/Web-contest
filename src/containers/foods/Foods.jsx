import React from 'react';
import './foods.css';

import { FoodItems } from '../../components';

const Foods = () => {
  return (
    <section id='foodPage' className='food-main-page'>
      <div className='food-page-content'>
        <FoodItems />
      </div>
      <div className='food-page-quote'>
        <p>The Quality We Provide is reflected in your Health</p>
      </div>
    </section>
  )
}

export default Foods