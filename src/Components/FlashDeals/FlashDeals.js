import React from 'react'


import slide1 from '../../assets/image/flashdeal1.jpg'
import slide2 from '../../assets/image/flashdeal2.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const FlashDeals = () => {
  return (
    <>
      <section className='flash_deal'>
            <div className="container">
                <h1>Flash Deals</h1>
                <Swiper
                    spaceBetween={5}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                      1080: {
                      slidesPerView: 3,
                      },
                      992: {
                      slidesPerView: 2,
                      },
                      768: {
                      slidesPerView: 2,
                      },
                      576: {
                      slidesPerView: 2,
                      }
                    }}
                    >
                    {/* ------------- Flash Deals */}
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide1} alt="" />
                            <ul className="item_over">
                                <li>
                                    <p>03</p>
                                    <span>Mont</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>Days</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>muni</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>seco</span>
                                </li>
                            </ul>
                        </div>
                        <div className="item_body">
                            <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        </div>
                        <hr />
                        <div className="item_footer">
                            <button>Book Now</button>
                            <div>
                                <del>Bdt 2000</del>
                                <h3>BDT 1600</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide2} alt="" />
                            <ul className="item_over">
                                <li>
                                    <p>03</p>
                                    <span>Mont</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>Days</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>muni</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>seco</span>
                                </li>
                            </ul>
                        </div>
                        <div className="item_body">
                            <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        </div>
                        <hr />
                        <div className="item_footer">
                            <button>Book Now</button>
                            <div>
                                <del>Bdt 2000</del>
                                <h3>BDT 1600</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide1} alt="" />
                            <ul className="item_over">
                                <li>
                                    <p>03</p>
                                    <span>Mont</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>Days</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>muni</span>
                                </li>
                                <li>
                                    <p>03</p>
                                    <span>seco</span>
                                </li>
                            </ul>
                        </div>
                        <div className="item_body">
                            <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        </div>
                        <hr />
                        <div className="item_footer">
                            <button>Book Now</button>
                            <div>
                                <del>Bdt 2000</del>
                                <h3>BDT 1600</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  )
}

export default FlashDeals