import React, { useState } from 'react';
import './Header.css';
import coverpic from '../../assets/Coverpic.png';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillCalendarFill } from 'react-icons/bs';
import { GiPerson } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { newSearch } from '../../context api/Context';
import dayjs from 'dayjs';

const Header = () => {
  const [destination,setDestination] = useState("");
  const [opendates, setOpendates] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1
  });
  const navigate = useNavigate();
  const handleOption = (name, operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operations === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  };
  const dispatch = useDispatch();
  const handleSearch = ()=>{
    dispatch(newSearch({destination,dates,options}));
    navigate("/hotel",{state:{destination,dates,options}})
  }
  return (
    <div className='header'>
      <div className='coverpic'>
        <img src={coverpic} alt='...' />
      </div>
      <div className='headline'>
        <p style={{color:"white"}}>come as guest, leave <br />as a friend</p>
        <p style={{color:"white"}}>find and book a great experience</p>
        <Link to='/exploredcities'><button className='btn'>Explore &#8594;</button></Link>
      </div>
      <div className='searchItems'>
        <div className='searchProducts'>
          <HiLocationMarker  className='header-icon' />
          <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={(e)=>setDestination(e.target.value)} />
        </div>
        <div className='searchProducts'  >
          <BsFillCalendarFill onClick={() => setOpendates(!opendates)}  className='header-icon' />
          <span className='headerSearchText'>{`${dayjs(dates[0].startDate).format('DD/MM/YYYY')} to 
          ${dayjs(dates[0].endDate).format('DD/MM/YYYY')} `}</span>
          {opendates && <DateRange
            dateFormat="MM-DD-YYYY"
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className='date'
            minDate={new Date()}
          />}
        </div>
        <div className='searchProducts' >
          <GiPerson onClick={()=>setOpenOptions(!openOptions)} className='header-icon'  />
          <span className='headerSearchText'>{`${options.Adult} Adult . ${options.Children} Children . ${options.Room} Room`}</span>
          {openOptions && <div className='optionsItem'>
            <div>
              <p>Adult</p>
              <p>
                <button onClick={() => handleOption("Adult", 'd')} disabled={options.Adult<=1} >-</button>
                {options.Adult}
                <button onClick={() => handleOption("Adult", 'i')}>+</button>
              </p>
            </div>
            <div>
              <p>Children</p>
              <p>
                <button onClick={() => handleOption("Children", 'd')} disabled={options.Children<=0}>-</button>
                {options.Children}
                <button onClick={() => handleOption("Children", 'i')}>+</button>
              </p>
            </div>
            <div>
              <p>Room</p>
              <p>
                <button onClick={() => handleOption("Room", 'd')} disabled={options.Room<=1}>-</button>
                {options.Room}
                <button onClick={() => handleOption("Room", 'i')}>+</button>
              </p>
            </div>
          </div>}
        </div>
        <div className='search'><BsSearch  className='header-icon' onClick={handleSearch} /></div>
      </div>
    </div>
  )
}

export default Header;
