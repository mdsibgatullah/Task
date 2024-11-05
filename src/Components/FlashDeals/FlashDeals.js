import React from 'react'
import flash1 from '../../assets/image/flashdeal1.jpg'

const FlashDeals = () => {
  return (
    <>
      <section className='flash_deals'>
        <div className="container">
            <h1>Flash Deals</h1>

            {/* flash_content --------  */}
            <ul className='flash_content'>
                <li className='item'>
                    <div className="img">
                        <img src={ flash1 } alt="" />
                        <ul className='datetime'>
                        <li>
                            <p>03</p>
                            <span>Month</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>Days</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>hours</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>scend</span>
                        </li>
                        </ul>
                    </div>

                    <div className="flash_text">
                        {/* title ----------- */}
                        <h3>
                        Euro Coach Deal - Dhaka to Cox's Bazar
                        </h3>
                        <hr />

                        {/* book now ------------ */}
                        <div className='book_now'>
                            <button>Book Now</button>
                            <div className='price'>
                                <del>bdt 2000</del>
                                <h2>bdt 1600</h2>
                            </div>
                        </div>

                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ flash1 } alt="" />
                        <ul className='datetime'>
                        <li>
                            <p>03</p>
                            <span>Month</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>Days</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>hours</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>scend</span>
                        </li>
                        </ul>
                    </div>

                    <div className="flash_text">
                        {/* title ----------- */}
                        <h3>
                        Euro Coach Deal - Dhaka to Cox's Bazar
                        </h3>
                        <hr />

                        {/* book now ------------ */}
                        <div className='book_now'>
                            <button>Book Now</button>
                            <div className='price'>
                                <del>bdt 2000</del>
                                <h2>bdt 1600</h2>
                            </div>
                        </div>

                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ flash1 } alt="" />
                        <ul className='datetime'>
                        <li>
                            <p>03</p>
                            <span>Month</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>Days</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>hours</span>
                        </li>
                        <li>
                            <p>03</p>
                            <span>scend</span>
                        </li>
                        </ul>
                    </div>

                    <div className="flash_text">
                        {/* title ----------- */}
                        <h3>
                        Euro Coach Deal - Dhaka to Cox's Bazar
                        </h3>
                        <hr />

                        {/* book now ------------ */}
                        <div className='book_now'>
                            <button>Book Now</button>
                            <div className='price'>
                                <del>bdt 2000</del>
                                <h2>bdt 1600</h2>
                            </div>
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
