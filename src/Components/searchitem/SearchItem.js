import React from 'react';
import { Link } from 'react-router-dom';
import './SearchItem.css';

const SearchItem = ({ item }) => {
    return (
        <div>
            <div className='srItem'>
                <img src={item.photos[0]} alt='...' className='srImg' />
                <div className='srItemDetails'>
                    <span className='srTitle'> {item.name} </span>
                    <span className='srDistance'>500m from center</span>
                    <span className='srTaxi'>Free taxi from airport</span>
                    <span className='srSubtitle'>Studio Apartment with Air conditioning</span>
                    <span className="srFeatures">
                        Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                    <span className="srCancelOp">Free cancellation </span>
                    <span className='srReview'> {item.reviews} Reviews</span>
                </div>
                <div className='srpricedtails'>
                    <div className='srRating'>
                        <span>Excellent</span>
                        <span><button>{item.ratingNo}</button></span>
                    </div>
                    <div className='priceDetails'>
                        <span className='srPrice'>${item.cheapestPrice}</span> <br />
                        <span className='srTax'>Free Tax and Fee</span>
                        <Link to={`/hotel/${item._id}`}>
                            <button className='btn' style={{ width: "7.3rem" }}>See Availability</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;
