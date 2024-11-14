import React from 'react'
import { NavLink } from 'react-router-dom';

import hero1 from '../../assets/image/hero1.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiTrain } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoBusOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <section className='hero' 
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

                {/* -------- hero menu  */}
                <div className="hero_menu">
                    <ul>
                        <div>
                            <li>
                                <NavLink to="/Bus">
                                    <IoBusOutline /><span>bus</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bus">
                                    <PiAirplaneTilt /><span>air</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bus">
                                    <PiTrain /><span>train</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bus">
                                    <LiaHotelSolid /><span>hotel</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bus">
                                    <PiTrain /><span>train</span>
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
                
                <div className="travel_route">
                    <form method="post">

                        {/* --------- hero section menu  */}
                        <div className="air_btn">
                            <ul>
                                <li>
                                    <label htmlFor="onday">
                                        <input type="radio" name="radio" id="onday" checked />
                                        On Way
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="round">
                                        <input type="radio" name="radio" id="round" />
                                        <span>Round Trip</span>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        {/* ------ from / to / date and return submite area */}
                        <div className=' hero_place'>
                            <ul>
                                <li>
                                    <small>flying from</small>
                                    <p>Please Select  <IoIosArrowDown /></p>
                                    <small>Departure Airport / City</small>
                                </li>
                                <li>
                                    <small>Flying from</small>
                                    <p>Please Select  <IoIosArrowDown /></p>
                                    <small>Departure Airport / City</small>
                                </li>
                                <div className="change_btn">
                                    <GoArrowSwitch />
                                </div>
                            </ul>
                            <ul>
                                <li>
                                    <small>flying from</small>
                                    <p>Please Selecth <IoIosArrowDown />
                                    </p>
                                    <small>Departure Airport / City</small>
                                </li>
                                <li>
                                    <small>Flying from <i></i></small>
                                    <p>Please Select <IoIosArrowDown /></p>
                                    <small>Departure Airport / City</small>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <small>flying from</small>
                                    <p>Please Select <IoIosArrowDown /></p>
                                    <small>Departure Airport / City</small>
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
  )
}

export default Hero
