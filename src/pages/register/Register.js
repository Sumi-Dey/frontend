import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess, registerSuccess } from '../../context api/Context';
import "../login/Login.css";
import RegisterImg from "../../assets/Register.png";
 
const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const err = useSelector((state) => state.search.error);
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))

    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", credentials);
            dispatch(registerSuccess(res.data));
            navigate("/");
            document.location.reload();
        } catch (error) {
            dispatch(loginFailed(error.response.data))
        }
    }
    return (
        <div className='main-login'>
            <div className='login' >
                <div className='left-login'><img src={RegisterImg} alt='...' /></div>
                <div className='right-login'>
                    {err ? (
                        <div className='err'>{err} </div>) : <div></div>}
                    <h2>Create Your account</h2>
                    <input type='text' id='username' className='login-input' placeholder='Username' onChange={handleChange} />
                    <input type='text' id='email' className='login-input' placeholder='Email ID' onChange={handleChange} />
                    <input type='password' id='password' className='login-input' placeholder='Password' onChange={handleChange} />
                    <button type='submit' className='btn' onClick={handleClick} id="liveAlertBtn">Submit </button>
                    <div className='signtxt'>By signing in or creating an account, you agree with our <span>Terms & conditions</span> and <span>Privacy statement</span></div>
                    <hr />
                    <div className='copyright'>All rights reserved.
                        Copyright (2006 - 2023) - Booking.com™</div>
                </div>
            </div>
        </div>
    )
}

export default Register
