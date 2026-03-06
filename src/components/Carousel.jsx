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

  <div className='pt-16 sm:pt-24 md:pt-32 lg:pt-40 px-3 sm:px-5 flex items-center justify-center'>
   <div className={`bg-[url('https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-testimonials-background-img.jpg')] w-full h-auto pb-6 sm:pb-10 md:pb-20 flex justify-center items-center`}>
   <button onClick={()=>{swiper.slidePrev()}} className="flex-shrink-0 p-1 sm:p-2"><img className="w-4 sm:w-6" src={leftArrow} alt="Previous"/></button>
   <div className="w-10/12 sm:w-8/12 hover:cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation,Autoplay]}
        className='bg-transparent w-full sm:w-11/12 h-full pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-24'
        onSwiper={setSwiper}
        autoplay={{delay:3000,disableOnInteraction:false}}

      >

        <SwiperSlide><CarouselContent content={"Ius duis aliquam sadipscing an, tota omnis sit ea, dicit oblique invidunt an vix. Quando alienum est cu, quas nobis dicam pro eu. Legendos invenire te eam, mundi prompta in quo, eum ut vero dignissim. Lorem ipsum dolor sit."} writer={"MILDRED CARLSON"} /></SwiperSlide>
        <SwiperSlide><CarouselContent content={"Lorem ipsum dolor sit amet, autem libris te mel, ut ridens doctus usu. Sit ex debet quodsi, ornatus nonumes volumus te sea. No vim debitis vituperata. Vis lorem facete no. Eos minim oratio ei, usu essent repudiare dissentias ne."} writer={"Charles Roberts"}/></SwiperSlide>
        <SwiperSlide><CarouselContent content={"Lorem ipsum dolor sit amet, autem libris te mel, ut ridens doctus usu. Sit ex debet quodsi, ornatus nonumes volumus te sea. No vim debitis vituperata. Vis lorem facete no. Eos minim oratio ei, usu essent repudiare dissentias ne."} writer={"Charles Roberts"}/></SwiperSlide>

        </Swiper>
        </div>
      <button onClick={()=>swiper.slideNext()} className="flex-shrink-0 p-1 sm:p-2"><img className="w-4 sm:w-6" src={rightArrow} alt="Next"/></button>
      </div>
      </div>

    </>
  );
}
