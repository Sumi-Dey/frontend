import React, { useEffect, useState } from 'react';
import './List.css';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../Components/searchitem/SearchItem';
import Blank from '../../Components/Blank/Blank';
import dayjs from 'dayjs';
import instance from '../../utils/BaseUrl';

const List = () => {
  const location = useLocation();
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [destination, setDestination] = useState(location.state.destination);
  const [opendates, setOpendates] = useState(false);
  const [min,setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await instance.get(`/hotel/getByCategory?city=${destination}&min=${min}&max=${max}`)
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
  const handleClick = ()=>{
    getApi()
  }

  return (
    <div>
      <div className='list'>
        <div className='left-list'>
          <h3>Search</h3>
          <div className='list-form'>
            <div>
              <label>Destination/property name</label>
              <input type='text' placeholder={destination} onChange={(e)=>setDestination(e.target.value)} />
            </div>
            <div>
              <label>Check-in date</label><br/>
              <input type='text' onClick={() => setOpendates(!opendates)} placeholder={`${dayjs(dates[0].startDate).format('DD/MM/YYYY')} to ${dayjs(dates[0].endDate).format('DD/MM/YYYY')}`} />
              {opendates && (<DateRange
                onChange={(item)=>setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />)}
            </div>
            <div>
              <label>Options</label>
              <div className='options'>
              <div className='optionItem'>
                  <span>Max Price Per Night</span>
                  <input type='number' className='inputOption' onChange={(e)=>setMin(e.target.value)} />
                </div>
                <div className='optionItem'>
                  <span>Min Price Per Night</span>
                  <input type='number' className='inputOption' onChange={(e)=>setMax(e.target.value)} />
                </div>
                <div className='optionItem'>
                  <span>Adult</span>
                  <input type='number' className='inputOption' placeholder={options.Adult} onChange={(e)=>setOptions(e.target.value)} />
                </div>
                <div className='optionItem'>
                <span>Children</span>
                  <input type='number' className='inputOption' min={0} placeholder={options.Children} onChange={(e)=>setOptions(e.target.value)}/>
                </div>
                <div className='optionItem'>
                <span>Room</span>
                  <input type='number' className='inputOption' min={1} placeholder={options.Room} onChange={(e)=>setOptions(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className='btn-box'>
              <button className='search-btn' onClick={handleClick}>Search</button>
            </div>
          </div>
        </div>
        {!data?(<div className='list-blank'><Blank /></div>):(<>
        <div className='right-list'>
          {data.length>1?
          (data.map((item)=>(
          <SearchItem item={item} key={item._id}  />
          ))):
          (<div className='noData'><div>Sorry right now we have no hotels or homestays in this location,</div><div> we will try to connect with this cities soon</div></div>)
          }
        </div>
        </>)}
      </div>
    </div>
  )
}

export default List
