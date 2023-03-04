import React, { useEffect, useState } from 'react';
import './Featured.css';
import Blank from '../Blank/Blank';
import { Link } from 'react-router-dom';
import { getAllCityUrl } from '../../services/AxiosAPI';
const Featured = () => {
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await getAllCityUrl();
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
  return (
    <>
      {!data ? (
        <div className='feature-blank'><Blank /> </div>
      ) :
        (<div className='featured'>
          {data?.map((item)=>(           
          <div className='featuredItem' key={item._id}>
            <div className='featuredImage' >
              <Link to={`/hotels/countByCity?city=${item.city}`}><img src={item.Photos[0]} alt='...'/></Link>
            </div>
            <div className='featuredTitle'>
              <span>{item.city}</span><br />
              <span>{item.hotelCount} Properties</span>
            </div>
          </div>
         ))}
        </div>)
      }
    </>
  )
}

export default Featured;
