import React from 'react'

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// img
import flash1 from '../../assets/image/flashblog1.jpeg'
import flash2 from '../../assets/image/flashblog2.jpeg'
import { Link } from 'react-router-dom';

function FlashBlog() {
  return (
    <>
      <section className='flash_blog'>
        <div className="container">
            <h1 className='section_title'>Flash Deals</h1>
            <ul>
                <li className='item'>
                    <Link to="/FlashDtl">
                        <div className='item_img'>
                            <img src={flash1} alt="" />
                        </div>
                        <div className="item_data">
                            <h2>Euro Coach Deal - Dhaka to Cox's Bazar</h2>
                            <b>Dhaka to Cox's Bazar Euro Coach Bus Tickets at <span>৳400 Discount</span></b>
                            <p><a href="bus">Learn More</a></p>
                            <ol>
                                <li><Link to="FlashDtl"><FaFacebookF /></Link></li>
                                <li><Link to="FlashDtl"><FaLinkedinIn /></Link></li>
                                <li><Link to="FlashDtl"><FaFacebookF /></Link></li>
                                <li><Link to="FlashDtl"><FaLinkedinIn /></Link></li>
                            </ol>
                        </div>
                    </Link>
                </li>
                <li className='item'>
                    <Link to="/FlashDtl">
                        <div className='item_img'>
                            <img src={flash2} alt="" />
                        </div>
                        <div className="item_data">
                            <h2>Euro Coach Deal - Dhaka to Cox's Bazar</h2>
                            <b>Dhaka to Cox's Bazar Euro Coach Bus Tickets at ৳400 Discount</b>
                            <p><a href="bus">Learn More</a></p>
                            <ol>
                                <li><a href="bus"><FaFacebookF /></a></li>
                                <li><a href="bus"><FaLinkedinIn /></a></li>
                                <li><a href="bus"><FaFacebookF /></a></li>
                                <li><a href="bus"><FaLinkedinIn /></a></li>
                            </ol>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
      </section>
    </>
  )
}

export default FlashBlog
