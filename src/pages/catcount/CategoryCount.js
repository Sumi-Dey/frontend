import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../Components/searchitem/SearchItem';
import dayjs from 'dayjs';
import '../list/List.css';
import { DateRange } from 'react-date-range';
import Blank from '../../Components/Blank/Blank';
import instance from '../../utils/BaseUrl';

const CategoryCount = () => {
    const location = useLocation();
    const catName = location.search;
    const [data,setData] = useState([]);
  const getApi = async ()=>{
    const data =  await instance.get(`/hotel/getByCategory${catName}`);
    setData(data?.data)
  }
  useEffect(()=>{
    getApi()
  },[])
    const [opendates, setOpendates] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }

    ]);
    return (
        <div>
            <div className='list'>
                <div className='left-list'>
                    <h3>Search</h3>
                    <div className='list-form'>
                        <div>
                            <label>Destination/property name</label>
                            <input type='text' placeholder="Destination" />
                        </div>
                        <div>
                            <label>Check-in date</label><br />
                            <input type='text' onClick={() => setOpendates(!opendates)} placeholder={`${dayjs(dates[0].startDate).format('DD/MM/YYYY')} to ${dayjs(dates[0].endDate).format('DD/MM/YYYY')}`} />
                            {opendates && (<DateRange
                                onChange={(item) => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
                            />)}
                        </div>
                        <div>
                            <label>Options</label>
                            <div className='options'>
                                <div className='optionItem'>
                                    <span>Adult</span>
                                    <input type='number' className='inputOption' />
                                </div>
                                <div className='optionItem'>
                                    <span>Children</span>
                                    <input type='number' className='inputOption' min={0} />
                                </div>
                                <div className='optionItem'>
                                    <span>Room</span>
                                    <input type='number' className='inputOption' min={1} />
                                </div>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button className='search-btn' >Search</button>
                        </div>
                    </div>
                </div>
                {!data ? (<div className='list-blank'><Blank /></div>) : (<>
                    <div className='right-list'>
                        {data?.map((item) => (
                            <SearchItem item={item} key={item._id} />
                        ))}
                    </div>
                </>)}
            </div>
            </div>
            )
}

            export default CategoryCount;
