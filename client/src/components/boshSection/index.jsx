import React from 'react'
import './boshSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function BoshSection() {
  return (
    <div>
<Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderBox">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa" alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa" alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa" alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa" alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa" alt="" srcset="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default BoshSection