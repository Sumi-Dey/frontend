import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound404.css';

const NotFound404 = () => {
    const navigate = useNavigate()
  return (
    <div className='not-found'>
      <div className='err404'>404</div>
      <div className='msg'>Oops! Page Not Found</div>
      <div><button className='err-btn' onClick={()=>navigate('/')}>Return Home</button></div>
    </div>
  )
}

export default NotFound404
