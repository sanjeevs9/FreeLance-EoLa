import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const image1="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/port-1-img-1.jpg";
const image2="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/port-1-img-2.jpg";
import leftArrow from "../assets/left-arrow-white.svg"
import rightArrow from "../assets/right-arrow-white.svg"

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import LastCarouselContent from './LastCarouselContent';

export default function LastCarousel() {
  const[swiper,setSwiper]=useState(null);
  return (
    <>
    <div className='pt-16 sm:pt-24 md:pt-28 lg:pt-32 px-3 sm:px-5'>
    <div className='cursor-pointer relative'>

      <Swiper  modules={[Navigation,Pagination,Autoplay]}
      loop={true}
      onSwiper={setSwiper}
      autoplay={{delay:2500}}
      speed={1000}
      className="mySwiper">
        <SwiperSlide><LastCarouselContent image={image1} title={"Modern Concept"} content={"Loren ispum dolor sir amet, vim malo"}/></SwiperSlide>
        <SwiperSlide><LastCarouselContent image={image2} title={"Retro Collection"} content={"Loren ispum dolor sir amet, vim malo"}/></SwiperSlide>
      </Swiper>
      <button onClick={()=>{swiper.slidePrev()}} className="absolute top-1/3 sm:top-1/2 left-2 sm:left-0 z-10 p-1"><img src={leftArrow} className='w-6 sm:w-8' alt="Previous"/></button>
      <button onClick={()=>{swiper.slideNext()}} className="absolute top-1/3 sm:top-1/2 right-2 sm:right-0 z-10 p-1"><img src={rightArrow} className='w-6 sm:w-8' alt="Next"/></button>
      </div>

      </div>
    </>
  );
}
