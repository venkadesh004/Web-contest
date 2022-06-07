import React from 'react';

import './App.css';
import { Circles } from './components';

import { First, Foods, Footer, Locations, Services } from './containers';
// import { Circles, Eatern, FoodItems, Order, Restaurants, NavBar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='pages'>
        <First />
      </div>
      <div className='pages'>
        <Foods />
      </div>
      <div className='pages'>
        <Services />
      </div>
      <div className='pages'>
        <Locations />
      </div>
      <div className='footer-page'>
        <Footer />
      </div>
    </div>
  )
}

export default App