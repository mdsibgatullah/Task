import React from 'react'
import slide1 from '../../assets/image/hero1.jpg'
import slide2 from '../../assets/image/popular_hotel1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <section>
        <div className="container">
            <h1>Trending Flight Destinations</h1>
            <Swiper
              spaceBetween={15}
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
                <SwiperSlide>
                  <div className="swipe_item">
                    <img src={slide1} alt="" />
                    <h2>Thailand</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swipe_item">
                    <img src={slide2} alt="" />
                    <h2>Banglasesh</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swipe_item">
                    <img src={slide2} alt="" />
                    <h2>Banglasesh</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swipe_item">
                    <img src={slide1} alt="" />
                    <h2>Banglasesh</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swipe_item">
                    <img src={slide2} alt="" />
                    <h2>Banglasesh</h2>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Slider
