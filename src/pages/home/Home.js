import React from 'react';
import BrowseProducts from '../../Components/browseproducts/BrowseProducts';
import CityHomestay1 from '../../Components/cityHomestay1/CityHomestay1';
import Featured from '../../Components/featured/Featured';
import Header from '../../Components/header/Header';
import UniqueHomestay from '../../Components/uniquehomestay/UniqueHomestay';

const Home = () => {
  return (
    <>
      <Header />
      <div className='mainContainer'>
        {/* <div className='container'> */}
          <div className='container1'>            
            <Featured />
            <h2 className='homestaysTitle'>Homestay type</h2>
            <BrowseProducts />
            <h2>Stay at our top unique homestays</h2>
            <UniqueHomestay />
            <h2 className='homestaysTitle' >We love these homestays in Darjeeling</h2>
            <CityHomestay1 />
          </div>
        {/* </div> */}
      </div>
      
    </>
  )
}

export default Home;
