import React from 'react';
import { Restaurants } from '../../components';
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
    </section>
  )
}

export default Locations