import React from 'react';
import './first.css';

import { NavBar, Eatern, Circles } from '../../components';

const First = () => {

  return (
    <section className='first-page' id="homePage">
      <div className='main-first-page'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='eatern-main-page'>
          <div className='eatern'>
            <Eatern />
          </div>
          <div className='eatern-quote'>
            <p>Eat Healthy, Live Healthy</p>
          </div>
        </div>
      </div>
      <div className='circle1'>
        <Circles diameter={'100px'} />
      </div>
      <div className='circle2'>
        <Circles diameter={'470px'} />
      </div>
      <div className='circle3'>
        <Circles diameter={'700px'} />
      </div>
      <div className='circle4'>
        <Circles diameter={'50px'} />
      </div>
    </section>
  )
}

export default First