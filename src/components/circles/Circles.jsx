import React from 'react';
import './circles.css';

const Circles = ({ diameter }) => {
  return (
    <div className='circle' style={{width: diameter, height: diameter}}></div>
  )
}

export default Circles