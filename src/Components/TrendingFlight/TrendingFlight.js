import React from 'react'

import slide1 from '../../assets/image/hero1.jpg'
import slide2 from '../../assets/image/popular_hotel1.jpg'
import slide3 from '../../assets/image/flashdeal1.jpg'
import slide4 from '../../assets/image/trending1.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function TrendingFlight() {
  return (
    <>
       <section className='trending_flight'>
            <div className="container">
                <h1>Trending Flight Destinations</h1>
                <Swiper
                spaceBetween={10}
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
                    slidesPerView: 5,
                    },
                    992: {
                    slidesPerView: 4,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    576: {
                    slidesPerView: 2,
                    }
                }}
                >
                    {/* ------------ Trending Flight */}
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide1} alt="" />
                            <div className="item_over">
                                <h3>Thailand</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide2} alt="" />
                            <div className="item_over">
                                <h3>Thailand</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide4} alt="" />
                            <div className="item_over">
                                <h3>Thailand</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide3} alt="" />
                            <div className="item_over">
                                <h3>Thailand</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide4} alt="" />
                            <div className="item_over">
                                <h3>Thailand</h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    {/* ------------- Popular Hotel */}
                    {/* <SwiperSlide>
                    <div className="item">
                        <div className="item_img">
                            <img src={slide1} alt="" />
                            <ul className="item_over">
                                <li>
                                    <p>03</p>
                                    <smoll>Month</smoll>
                                </li>
                                <li>
                                    <p>03</p>
                                    <smoll>Days</smoll>
                                </li>
                                <li>
                                    <p>03</p>
                                    <smoll>Days</smoll>
                                </li>
                                <li>
                                    <p>03</p>
                                    <smoll>Days</smoll>
                                </li>
                            </ul>
                        </div>
                        <div className="item_body">
                            <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        </div>
                        <hr />
                        <div className="item_footer">
                            <ul>
                                <li><i>*</i></li>
                                <li><i>*</i></li>
                                <li><i>*</i></li>
                                <li><i>*</i></li>
                            </ul>
                            <p>Refundable</p>
                        </div>
                    </div>
                    </SwiperSlide> */}
                    
                </Swiper>
            </div>
       </section>
    </>
  )
}

export default TrendingFlight
