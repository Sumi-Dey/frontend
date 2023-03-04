import React, { useEffect, useState } from 'react';
import './Hotels.css';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import {HiLocationMarker} from 'react-icons/hi';
import {BiRightArrowCircle} from 'react-icons/bi';
import {BiLeftArrowCircle} from 'react-icons/bi';
import {ImCross} from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import Blank from "../../Components/Blank/Blank";
import Reserve from '../../Components/reserve/Reserve';
import instance from '../../utils/BaseUrl';

const Hotels = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const handleOpen = (i)=>{
      setSlideNumber(i);
      setOpen(true);
  }
  const [openModal,setOpenModal] = useState(false);
  const navigate = useNavigate()
  const slideChanger = (direction)=>{
    let changeSlideNumber ;

    if (direction==='l') {
      changeSlideNumber = slideNumber === 0?5:slideNumber-1
    }else{
      changeSlideNumber = slideNumber === 5?0:slideNumber+1
    }
    setSlideNumber(changeSlideNumber);
  }
  const photos = [
    {img:photo1},
    {img:photo2},
    {img:photo5},
    {img:photo4},
    {img:photo5},
    {img:photo6},
  ]
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await instance.get(`/hotel/find/${id}`)
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
  const {abc,userDetails} = useSelector((state)=>state.search)
  const dayDiff = abc?.dates[0]?.endDate?.getDate()-abc?.dates[0]?.startDate?.getDate();
  const handleClick = ()=>{
    if (userDetails?.user || userDetails?.register) {
      setOpenModal(true)
    } else {
      navigate("/")
    }
  }
  
  return (
    <>
    {!data?(
    <div className='hotel-blank'>
      <Blank />
      </div> )
    :
    (<>
    <div className='hotels'>
        {open && <div className='slider'>
          <ImCross className='exit' onClick={()=>setOpen(false)} />
          <BiLeftArrowCircle className='leftArrow' onClick={()=>slideChanger('l')} />
          <BiRightArrowCircle className='rightArrow' onClick={()=>slideChanger('r')}/>
          <div className='sliderWraper'>
            <img src={photos[slideNumber].img} alt='...' className='sliderImg' />
          </div>
        </div>}
      <div className='hotelWrapper'>
        <button className='bookBtn' onClick={handleClick}>Reserve or Book Now</button>
      <h1 className='hotelTitle'>{data.name}</h1>
      <span className='location'><HiLocationMarker />{data.address} </span>
      <span className='distance'>Excellent location - 500m from center</span>
      <span className='subtitle'>Book a stay over at this price and get a free airport taxi</span>
      <div className='hotelImages'>
        {photos.map((photo,i)=>(
          <div className='hotelImageWraper' key={i}>
          <img src={photo.img} alt='...' className='hotelImg' onClick={()=>handleOpen(i)} />
          </div>
        ))}
      </div>
      <div className='hotelDetails'>
          <div className='leftHotelDetails'>
            <h2>Stay in the heart of ocean</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>   
          <div className='rightHotelDetails'>
            <h4>Perfect for a {dayDiff?dayDiff:""} nights stay</h4>
            <span className='location'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <span className='srPrice'>${dayDiff?(data?.cheapestPrice * dayDiff * abc?.options?.Room):(data.cheapestPrice)} <span style={{fontWeight:"lighter"}}>({dayDiff?dayDiff:"Per"} nights)</span></span>
            <button className='reserveBtn' onClick={handleClick}>Reserve or Book Now</button>
          </div>
          <div></div>
      </div>
      </div>
    </div>
    </>)}
    {openModal && <Reserve setOpen={setOpenModal} hotelID={id} />}
      
    </>
  )
}
export default Hotels
