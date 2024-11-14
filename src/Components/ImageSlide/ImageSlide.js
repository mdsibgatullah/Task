import React from 'react'

import slide1 from '../../assets/image/imageslide1.jpeg'
import slide2 from '../../assets/image/imageslide2.jpeg'
import slide3 from '../../assets/image/imageslide3.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function ImageSlide() {
  return (
    <>
    <section className='image_slide'>
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
          onMouseEnter={(swiper) => swiper.autoplay.stop()}
          onMouseLeave={(swiper) => swiper.autoplay.start()}
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
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide2} alt="" />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide3} alt="" />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide2} alt="" />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
                <div className="item_img">
                    <img src={slide3} alt="" />
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default ImageSlide
