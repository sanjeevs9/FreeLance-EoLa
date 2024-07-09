import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

const photo = "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-1.jpg";

function useParallax(value,distance) {
    console.log(window.screen)
    window.innerWidth<=640?distance=0:distance
    return useTransform(value, [0, 1], [-distance, distance]);
  }

export default function Section2() {
    const ref=useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 60);


    return (
        <>
        <div className="flex justify-center pt-24  ">
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2  w-[80rem] gap-6 md:gap-0   h-auto ">
                <div ref={ref} className=" row-span-2   md:col-span-1   flex  items-center pl-5 sm:pl-10 h-full ">
                   <div className=" flex flex-col sm:w-4/5 w-full  "> 
                    <div className="pb-10">
                        <p className="font-cormorant-gara italic text-[#f5989d]   text-lg">spring / summer ‘18</p>
                        <h2 className="font-cormorant-uni leading-none pb-4 text-[35px] sm:text-[44px] md:text-[40px] lg:text-[48px] xl:text-[52px]">Unique & Stylish Collection</h2>
                        <div className="font-work-sans text-[13px] sm:text-[14px] xl:text-[15px] text-gray-500 font-extralight ">Inspired by nature and its lovely colors, our latest clothes collection is made for everyone who wants to look stylish while protecting the planet. Eco-friendly fabrics are in our business focus.</div>
                    </div>
                    <div className=" bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]  items-center justify-center w-[166px]">
                        <button className="bg-white  font-work-sans text-xs pt-5 pb-5 pl-12 pr-12 ">SHOP NOW</button>
                    </div>
                  </div> 
                </div>
                <motion.div style={{y}} className="row-span-1 md:col-span-1 pl-5 sm:pl-10 pr-5 md:pl-0 lg:pr-10  flex justify-center items-center md:none  ">
                    <img className="object-fill " src={photo} />
                </motion.div>
            </div>
         </div>
        </>
    )
}