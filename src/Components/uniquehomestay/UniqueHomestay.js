import React, { useEffect, useState } from 'react';
import './UniqueHomestay.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getByFeatureUrl } from '../../services/AxiosAPI';
import Blank from "../Blank/Blank";

const UniqueHomestay = () => {
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await getByFeatureUrl();
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])

  return (
    <div className='uniquehomestay'>
      {!data?(<Blank/>):(
        <>
        {
            data.map((prod,index)=>(
                <div className="card unique-card" key={index}  >
          <Link to={`/hotel/${prod._id}`}> <img src={prod.photos[0]}  className="card-img-top unique-card-img" alt="..." /></Link>
          <div className="card-body" style={{paddingLeft:"8px"}}>
            <h5 className="card-title unique-card-title">{prod.name}</h5>
            <p className="card-subtitle"><HiLocationMarker /> {prod.city}</p>
            {prod.rating && <div className='ratings topMargin'>
              <p> <button>{prod.rating}</button> </p>
              <p>{prod.reviews} reviews</p>
            </div>}
          </div>
        </div>
            ))
        }
      </>
      )}
    </div>
  )
}

export default UniqueHomestay;
