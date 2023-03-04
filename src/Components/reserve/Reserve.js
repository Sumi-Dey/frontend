import React, { useEffect, useState } from 'react';
import './Reserve.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/BaseUrl';

const Reserve = ({setOpen, hotelID}) => {
  const [selectedRooms,setSelectedRooms] = useState([]);
  const [FullDates,setFullDates] = useState([]);
  let allDates;
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await instance.get(`/hotels/room/${hotelID}`);
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
  const dates = useSelector((state)=>state?.search?.abc?.dates);
  const handleSelect = (e)=>{
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked?[...selectedRooms,value]:selectedRooms.filter((item)=>item!==value))
  }
  const getDatesRange = (startDate=new Date(),endDate=new Date())=>{
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate()+1)
    }
    setFullDates(dates)
  }
  const isAvailable = (roomNumber)=>{
    const isFound = roomNumber?.unavailableDates?.some((date)=>
    allDates?.includes(new Date(date).getTime()));
    return isFound;
  }
  useEffect(()=>{
    if (dates) {
   allDates = getDatesRange(dates[0]?.startDate,dates[0]?.endDate);
    }
  },[dates])
  const navigate = useNavigate();
  const handleClick = async ()=>{
      try {
        await Promise.all(
          selectedRooms.map((roomID)=>{
            const res = axios.put(`/rooms/availability/${roomID}`,{dates:allDates});
            return res.data;
          })
        )
        setOpen(false)
        navigate('/')
      } catch (error) {
      }
  }
    return (
    <div className='reserve'>
      {data.length>=1?(
      <div className='rContainer'>
        <AiFillCloseCircle className='rClose' onClick={()=>setOpen(false)}/>
        <span>Select your rooms:</span>
        
        <div>
        {
          data?.map((item)=>(
            <div className='rItem' key={item._id}>
              <div className='rItemInfo'>
                <div className='rTitle'>{item.title}</div>
                <div className='rDesc'>{item.desc} </div>
                <div className='rMax'>Max People: <b>{item.maxPeople}</b> </div>
                <div className='rPrice'>{item.price} </div>
              </div>
              {
                item.roomNumbers.map((roomNumber)=>(
                  <div className='rNumber' key={roomNumber._id}>
                    <label>{roomNumber.number}</label><br/>
                    <input type='checkbox' value={roomNumber._id} onChange={handleSelect} disabled={isAvailable(roomNumber)}/>
                  </div>
                ))
              }
            </div>
          ))
        }
        <div><button type='submit' className='rBtn' onClick={handleClick}>Reserve Now</button></div>
        </div>
        
      </div>
      ):(<div className='noRoom'>Sorry! there is no available room in this homestay  
      <AiFillCloseCircle className='noRoomClose' onClick={()=>setOpen(false)}/>
      </div>)}
    </div> 
  )
}

export default Reserve;
