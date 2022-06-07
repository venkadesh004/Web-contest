import React from 'react';
import { Circles, Restaurants } from '../../components';
import './locations.css';

const Locations = () => {
  return (
    <section id='locations'>
      <div className="locations-page-main">
        <div className="locations-page-first-half">
          <div className="locations-page-heading">
            <h1>Wanna taste it?<br/>Find Us here....</h1>
          </div>
        </div>
        <div className="locations-page-second-half">
          <div className="locations-page-restaurants">
            <Restaurants />
          </div>
        </div>
      </div>
      <div className="circle7">
        <Circles diameter={ '150px' } />
      </div>
      <div className="circle8">
        <Circles diameter={ '780px' } />
      </div>
    </section>
  )
}

export default Locations