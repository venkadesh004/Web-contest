import React from 'react';
import './mainpage.css';

import First from '../first/First';
import Foods from '../foods/Foods';
import Services from '../services/Services';
import Locations from '../locations/Locations';
import Footer from '../footer/Footer';

const MainPage = () => {
  return (
    <div className='mainPage'>
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

export default MainPage