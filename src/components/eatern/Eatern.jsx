import React from 'react';
import './eatern.css';
import eatern_hat from '../../assets/eatern_hat.png';
import eatern_main_page_image from '../../assets/eatern_main_page_image.png'; 

const Eatern = () => {
  return (
    <div className='eatern-main'>
      <div className='eatern-content'>
        <div className='eatern-hat'>
          <img src={eatern_hat} alt="" />
        </div>
        <p className='eatern-heading'>Eatern</p>
        <div className='eatern-main-page-image'>
          <img src={eatern_main_page_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Eatern