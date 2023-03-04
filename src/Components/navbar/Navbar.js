import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from 'react-icons/io';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Navbar = () => {
  const person = useSelector((state) => state.search?.userDetails);
  const [openLogout, setOpenLogout] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenLogout(false));
  const removeUser = ()=>{
    localStorage.clear();
    document.location.reload()
  }
  return (
    <div className='nav'>
      <div className='left-nav'>
        {/* <img src={Logo} alt='...' /> */}
        <Link to='/' className='link'> Your Homestay </Link>
      </div>
      {person?.user || person?.register ?
        (<div className='username'>{person?.user?.username || person?.register?.username}<IoMdArrowDropdown className='dropdown-icon' onClick={() => setOpenLogout(true)} />
          {openLogout && <div className='logout' ref={ref}><button className='btn nav-btn' onClick={removeUser}>Logout</button></div>}
        </div>) :
        (
          <div className='nav-right'>
            <Link to='/register'><button className='btn nav-btn'>Register</button></Link>
            <Link to='/login'> <button className='btn nav-btn'>Sign In</button></Link>
          </div>)}
    </div>
  )
}

export default Navbar
