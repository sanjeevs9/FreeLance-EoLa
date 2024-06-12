import { Swiper, SwiperSlide }  from 'swiper/react';
import {Autoplay,EffectFade} from "swiper/modules"
const image1="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h-1-slider-1.jpg";
const image2="https://eola.qodeinteractive.com/wp-content/uploads/2018/06/h-1-slider-4.jpg";
const image3="https://eola.qodeinteractive.com/wp-content/uploads/2018/06/h-1-slider-3-1.jpg";

// Import Swiper styles
import 'swiper/css';
import ImageCard from './ImageCard';
import Navbar from './Navbar';

export default function Hero(){
    return(
        <>
        <div className='p-5 relative z-0'>
            <div className='absolute top-5  z-20  w-full pr-14'>
                
            <Navbar/>
            
            </div>
        <Swiper className='min-h-screen '
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 2500,disableOnInteraction: false}}
      loop={true}
      speed={1000}
      modules={[Autoplay]}
    >
      <SwiperSlide className='min-h-screen bg-black'>
        <ImageCard image={image1} paragraph={"Our New Arrivals Comming To Your Address"} title={"Stylish Details"} text={"SEE MORE"}/>
      </SwiperSlide>
      <SwiperSlide className=''>
      <ImageCard image={image2} paragraph={"Our New Arrivals Comming To Your Address"} title={"New Collection"} text={"SEE MORE"}/>
      </SwiperSlide>
      <SwiperSlide>
      <ImageCard image={image3} paragraph={"Our New Arrivals Comming To Your Address"} title={"Lovely Colours"} text={"SEE MORE"}/>
      </SwiperSlide>
      
    </Swiper>
    </div>
        </>
    )
}