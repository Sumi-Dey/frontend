import React, { useEffect, useState } from 'react';
import './BrowseProducts.css';
import { Link } from 'react-router-dom';
import { getAllCategoryCityUrl } from '../../services/AxiosAPI';

const BrowseProducts = () => {
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await getAllCategoryCityUrl();
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
  return (
    <div className='browseProducts'>
    {data?.map((item)=>(
        <div key={item._id}><Link to={`/hotels/getByCategory?category=${item.category}`}><img src={item?.Photos[0]} className='browseImg' alt='...' /></Link>
          <div className='cat'>{item?.category}</div>
        </div>  
    ))}
    </div>
  )
}

export default BrowseProducts;
