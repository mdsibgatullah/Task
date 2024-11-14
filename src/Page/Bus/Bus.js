import React from 'react'
import { NavLink } from 'react-router-dom';

// img
import hero1 from '../../assets/image/bushero.jpeg'

// icon 
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiTrain } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoBusOutline } from "react-icons/io5";

// component 
import Frequently from '../../Components/Frequently/Frequently';
import PopularBus from '../../Components/PopularBus/PopularBus';
import WeAccept from '../../Components/WeAccept/WeAccept';
import ImageSlide from '../../Components/ImageSlide/ImageSlide';


function Bus() {
  return (
    <>
    <section className='hero bus' 
        style={{
            backgroundImage: `url(${hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <div className="hero_image"
            style={{
                backgroundImage: `url(${hero1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'200px',
            }}
            >
        </div>
        <div className="">
            <div className="hero_data">
                <div className='hero_title'>
                    <h1>More Routes, More Tickets</h1>
                    <h3>No 1 online Ticketing Platform</h3>
                </div>
                
                <div className="travel_route">
                    <form method="post">

                        {/* ------ from / to / date and return submite area */}
                        <div className=' hero_place'>
                            <ul>
                                <li>
                                    <small>flying from</small>
                                    <p>Please Select</p>
                                </li>
                                <li>
                                    <small>Flying from</small>
                                    <p>Please Select</p>
                                </li>
                                <div className="change_btn">
                                    <GoArrowSwitch />
                                </div>
                            </ul>
                            <ul>
                                <li>
                                    <small>flying from</small>
                                    <p>Please Select</p>
                                </li>
                                <li>
                                    <small>Flying from</small>
                                    <p>Please Select</p>
                                </li>
                            </ul>
                        </div>
                        
                        {/* -------- Trending Searches */}
                        <div className='trend_search'>
                            <h4>Trending Searches: </h4>
                            <ul>
                                <li><p>Dhaka</p> <FaArrowRightLong /> <p>Bangkok</p></li>
                                <li><p>Dhaka</p> <FaArrowRightLong /> <p>Bangkok</p></li>
                                <li><p>Dhaka</p> <FaArrowRightLong /> <p>Bangkok</p></li>
                                <li><p>Dhaka</p> <FaArrowRightLong /> <p>Bangkok</p></li>
                            </ul>
                        </div>
                        
                        {/* -------from submite btn  */}
                        <div className='search_btn'> 
                            <button type="submit">Search <span>Flight</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <ImageSlide/>
    <Frequently/>
    <PopularBus/>
    <WeAccept/>
    </>
  )
}

export default Bus
