const bg="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-testimonials-background-img.jpg";
import leftArrow from "../assets/left-arrow.svg"
import rightArrow from "../assets/right-arroww.svg"
import "../App.css"

import React,{useEffect, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import CarouselContent from './CarouselContent';

export default function Carousel() {
  const [swiper, setSwiper] = useState(null);
    
  return (
    <>

  <div className='pt-32 md:pt-40 pr-5 pl-5  flex items-center justify-center'>  
   <div className={`bg-[url('https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-testimonials-background-img.jpg')] w-full h-auto pb-10 sm:pb-20  flex justify-center items-center`}>
   <button onClick={()=>{swiper.slidePrev()}}><img className="size-fit w-6  " src={leftArrow}/></button>
   <div className="w-8/12 hover:cursor-pointer ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation,Autoplay]}
        className=' bg-transparent w-11/12 h-full pt-24 pb-12 sm:pb-24 '
        onSwiper={setSwiper} 
        autoplay={{delay:3000,disableOnInteraction:false}}

      >
        
        <SwiperSlide><CarouselContent content={"Ius duis aliquam sadipscing an, tota omnis sit ea, dicit oblique invidunt an vix. Quando alienum est cu, quas nobis dicam pro eu. Legendos invenire te eam, mundi prompta in quo, eum ut vero dignissim. Lorem ipsum dolor sit."} writer={"MILDRED CARLSON"} /></SwiperSlide>
        <SwiperSlide><CarouselContent content={"Lorem ipsum dolor sit amet, autem libris te mel, ut ridens doctus usu. Sit ex debet quodsi, ornatus nonumes volumus te sea. No vim debitis vituperata. Vis lorem facete no. Eos minim oratio ei, usu essent repudiare dissentias ne."} writer={"Charles Roberts"}/></SwiperSlide>
        <SwiperSlide><CarouselContent content={"Lorem ipsum dolor sit amet, autem libris te mel, ut ridens doctus usu. Sit ex debet quodsi, ornatus nonumes volumus te sea. No vim debitis vituperata. Vis lorem facete no. Eos minim oratio ei, usu essent repudiare dissentias ne."} writer={"Charles Roberts"}/></SwiperSlide>
       
        </Swiper>
        </div>
      <button onClick={()=>swiper.slideNext()}><img className="size-fit w-6" src={rightArrow}/></button>
      </div>
      </div> 

    </>
  );
}
