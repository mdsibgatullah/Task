import React from 'react'

import slide1 from '../../assets/image/popular_hotel1.jpg'
import slide2 from '../../assets/image/popular_hotel2.jpg'

import { IoIosStar } from "react-icons/io";


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
    {/* Popular Hotel ----------  */}
      <section className='popular_hotel'>
        <div className="container">
            <h1>Popular Hotel</h1>
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
                    slidesPerView: 3,
                    },
                    992: {
                    slidesPerView: 3,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    576: {
                    slidesPerView: 2,
                    }
                }}
                >
                {/* ------------- Popular Hotel */}
                <SwiperSlide>
                <div className="item">
                    <div className="item_img">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="item_body">
                        <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        <p>cox's bazar</p>
                        <h4>Price starts from  <span>৳18,000</span></h4>
                    </div>

                    <div className="item_footer">
                        <ul>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                        </ul>
                        <p>Refundable</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="item_img">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="item_body">
                        <h3>Euro Coach </h3>
                        <p>cox's bazar</p>
                        <h4>Price starts from  <span>৳18,000</span></h4>
                    </div>

                    <div className="item_footer">
                        <ul>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                        </ul>
                        <p>Refundable</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="item_img">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="item_body">
                        <h3>Euro Coach Deal - Dhaka to Cox's Bazar</h3>
                        <p>cox's bazar</p>
                        <h4>Price starts from  <span>৳18,000</span></h4>
                    </div>

                    <div className="item_footer">
                        <ul>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                            <li><i><IoIosStar /></i></li>
                        </ul>
                        <p>Refundable</p>
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
