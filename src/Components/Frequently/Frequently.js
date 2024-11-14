import React from 'react'


import slide1 from '../../assets/image/Frequently2.png'
import slide2 from '../../assets/image/Frequently1.jpeg'
import slide3 from '../../assets/image/Frequently3.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


function Frequently() {
  return (
    <section className='frequently'>
      <div className="container">
        <h1>Frequently Traveled Bus Routes</h1>
        <Swiper
          spaceBetween={20}
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
          {/* ------------ Frequently */}
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide1} alt="" />
                    <div className="item_over">
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide2} alt="" />
                    <div className="item_over">
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide3} alt="" />
                    <div className="item_over">
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Frequently
