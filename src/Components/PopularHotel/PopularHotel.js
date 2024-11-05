import React from 'react'
import { IoIosStar } from "react-icons/io";
import popular1 from '../../assets/image/popular_hotel1.jpg'

const FlashDeals = () => {
  return (
    <>
    {/* Popular Hotel ----------  */}
      <section className='popular_hotel flash_deals'>
        <div className="container">
            <h1>Popular Hotel</h1>
            {/* populer Hotel---------- */}
            <ul className='popular_content flash_content'>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                    </div>
                    
                    {/* populer Hotel---------- */}
                    <div className="flash_text populer_hotel">
                        <h3>Sea Pearl Beach Resort & Spa</h3>
                        <p>Cox's Bazar</p>
                        <h4><b>Price starts from <span>৳18,000</span></b></h4>

                        {/* book now ------------ */}
                        <div className='review'>
                            <ul className="star">
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                            </ul>
                            <p>Refundable</p>
                        </div>
                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                    </div>
                    
                    {/* populer Hotel---------- */}
                    <div className="flash_text populer_hotel">
                        <h3>Sea Pearl Beach Resort & Spa</h3>
                        <p>Cox's Bazar</p>
                        <h4><b>Price starts from <span>৳18,000</span></b></h4>

                        {/* book now ------------ */}
                        <div className='review'>
                            <ul className="star">
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                            </ul>
                            <p>Refundable</p>
                        </div>
                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                    </div>
                    
                    {/* populer Hotel---------- */}
                    <div className="flash_text populer_hotel">
                        <h3>Sea Pearl Beach Resort & Spa</h3>
                        <p>Cox's Bazar</p>
                        <h4><b>Price starts from <span>৳18,000</span></b></h4>

                        {/* book now ------------ */}
                        <div className='review'>
                            <ul className="star">
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                                <li><IoIosStar /></li>
                            </ul>
                            <p>Refundable</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </section>
    </>
  )
}

export default FlashDeals
