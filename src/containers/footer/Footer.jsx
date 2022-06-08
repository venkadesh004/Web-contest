import React from 'react';
import './footer.css';

import { FacebookLogo, WhatsappLogo, TwitterLogo, InstagramLogo, MiniLogo } from './import';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact-us">
        <p className='contact-us-heading'>Contact Us</p>
        <div className="contact-us-details">
          <a href="https://www.facebook.com/profile.php?id=100081214953675" target="_blank"><div className="social-boxes"><img src={ FacebookLogo } alt="" /></div></a>
          <a href="" target="_blank"><div className="social-boxes"><img src={ WhatsappLogo } alt="" /></div></a>
          <a href="https://twitter.com/SVenkadesh004" target="_blank"><div className="social-boxes"><img src={ TwitterLogo } alt="" /></div></a>
          <a href="https://www.instagram.com/venkadesh_developer/" target="_blank"><div className="social-boxes"><img src={ InstagramLogo } alt="" /></div></a>
        </div>
      </div>
      <div className="copyrights">
        <p>	&#169; All copyrights Issued.</p>
      </div>
      <div className="main-branch-address">
        <img src={ MiniLogo } alt="" />
        <p className='line1'>Main Branch at:<br/>Thiagarajar College Of Engineering<br/>Thiruparakundram</p>
      </div>
    </div>
  )
}

export default Footer