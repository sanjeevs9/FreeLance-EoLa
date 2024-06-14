import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
const image1="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/port-1-img-1.jpg";
const image2="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/port-1-img-2.jpg";
import leftArrow from "../assets/left-arrow-white.svg"
import rightArrow from "../assets/right-arrow-white.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import LastCarouselContent from './LastCarouselContent';

export default function LastCarousel() {
  const[swiper,setSwiper]=useState(null);
  return (
    <>
    <div className=' pt-28 sm:pt-32 pl-5 pr-5'>
    <div className=' cursor-pointer relative  '>
      
      <Swiper  modules={[Navigation,Pagination,Autoplay]} 
      loop={true}
      onSwiper={setSwiper}
      autoplay={{delay:2500}}
      speed={1000}
      className="mySwiper ">
        <SwiperSlide><LastCarouselContent image={image1} title={"Modern Concept"} content={"Loren ispum dolor sir amet, vim malo"}/></SwiperSlide>
        <SwiperSlide><LastCarouselContent image={image2} title={"Retro Collection"} content={"Loren ispum dolor sir amet, vim malo"}/></SwiperSlide>
        
        
      </Swiper>
      <button onClick={()=>{swiper.slidePrev()}} ><img src={leftArrow} className='absolute size-fit w-8 top-1/3 sm:top-1/2 z-10 '/></button>
      <button onClick={()=>{swiper.slideNext()}} ><img src={rightArrow} className=' absolute top-1/3 sm:top-1/2 z-10 right-5 size-fit w-8 ' /></button>
      </div>
      
      </div>
    </>
  );
}
