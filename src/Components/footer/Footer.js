import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
      <span>Save time, save money!</span><br/>
<span>Sign up and we'll send the best deals to you</span>
      </div>
      <div>
        <input type='email' placeholder='Your mail' className='mail' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer;
