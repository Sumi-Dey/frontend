import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginStart, loginSuccess } from '../../context api/Context';
import './Login.css';
import LoginImg from "../../assets/Login.png"

const Login = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  })
  const dispatch = useDispatch();
  const err = useSelector((state) => state.search.error);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch(loginSuccess(res.data));
      navigate("/");
      document.location.reload();
    } catch (error) {
      dispatch(loginFailed(error.response.data));
    }
  }
  return (
    <div className='main-login'>
      <div className='login'>
        <div className='left-login'><img src={LoginImg} alt='...' /></div>
        <div className='right-login'>
          {err ? (
            <div className='err'>{err} </div>) : <div></div>}
          <h2>Sign in or create an account</h2>
          <input type='text' id='username' className='login-input' placeholder='Username' onChange={handleChange} />
          <input type='password' id='password' className='login-input' placeholder='Password' onChange={handleChange} />
          <button type='submit' style={{ width: "18rem", margin: "0" }} className='btn' onClick={handleClick} id="liveAlertBtn">Submit </button>

          <div className='signtxt'>By signing in or creating an account, you agree with our <span>Terms & conditions</span> and <span>Privacy statement</span></div>
          <hr />
          <div className='copyright'>All rights reserved.
            Copyright (2006 - 2023) - Booking.com™</div>
        </div>
      </div>

    </div>
  )
}

export default Login;
