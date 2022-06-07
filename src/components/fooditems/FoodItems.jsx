import React from 'react';
import './fooditems.css';

import Items from '../items/Items';
import { ChickenFries, Pasta, GrillChicken, Dosa, MuttonBiriyani, Parotta } from './import';

const FoodItems = () => {

  return (
    <div className='foodItems'>
      <div className='chicken-fries'>
        <Items food={ ChickenFries } heading={ "Fried Chicken" } description={ "Wow too Juicy!!" } />
      </div>
      <div className='pasta'>
        <Items food={ Pasta } heading={ "Mexican Pasta" } description={ "Waw its yummy and saucy" } />
      </div>
      <div className='grill-chicken'>
        <Items food={ GrillChicken } heading={ "Grill Chicken" } description={ "My Tongue is not stopping sweating" } />
      </div>
      <div className='mutton-biriyani'>
        <Items food={ MuttonBiriyani } heading={ "Mutton Biriyani" } description={ "My Stomach just full by seeing it!" } />
      </div>
      <div className='dosa'>
        <Items food={ Dosa } heading={ "Dosa" } description={ "Yummy Breakfast" } />
      </div>
      <div className='parotta'>
        <Items food={ Parotta } heading={ "Parotta" } description={ "Nothing can stop me to eat it" } />
      </div>
    </div>
  )
}

export default FoodItems