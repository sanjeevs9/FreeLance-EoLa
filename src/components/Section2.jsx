import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

const photo = "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-1.jpg";

function useParallax(value,distance) {
    window.innerWidth<=640?distance=0:distance
    return useTransform(value, [0, 1], [-distance, distance]);
  }

export default function Section2() {
    const ref=useRef(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 60);

    return (
        <>
        <div className="flex justify-center pt-12 sm:pt-16 md:pt-24 px-3 sm:px-0">
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 w-full max-w-[80rem] gap-6 md:gap-0 h-auto">
                <div ref={ref} className="row-span-2 md:col-span-1 flex items-center pl-4 sm:pl-10 pr-4 sm:pr-0 h-full">
                   <div className="flex flex-col sm:w-4/5 w-full">
                    <div className="pb-6 sm:pb-10">
                        <p className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg">spring / summer '18</p>
                        <h2 className="font-cormorant-uni leading-none pb-3 sm:pb-4 text-[28px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[52px]">Unique & Stylish Collection</h2>
                        <div className="font-work-sans text-[13px] sm:text-[14px] xl:text-[15px] text-gray-500 font-extralight">Inspired by nature and its lovely colors, our latest clothes collection is made for everyone who wants to look stylish while protecting the planet. Eco-friendly fabrics are in our business focus.</div>
                    </div>
                    <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px] items-center justify-center w-[150px] sm:w-[166px]">
                        <button onClick={()=>navigate('/shop')} className="bg-white font-work-sans text-xs pt-4 pb-4 pl-10 pr-10 sm:pt-5 sm:pb-5 sm:pl-12 sm:pr-12">SHOP NOW</button>
                    </div>
                  </div>
                </div>
                <motion.div style={{y}} className="row-span-1 md:col-span-1 px-4 sm:pl-10 sm:pr-5 md:pl-0 lg:pr-10 flex justify-center items-center">
                    <img className="object-fill w-full" src={photo} alt="Collection" />
                </motion.div>
            </div>
         </div>
        </>
    )
}
