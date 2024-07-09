import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";
const photo="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.jpg";

function useParallax(value, distance) {
    window.innerWidth<=640 ?distance=0:distance
    return useTransform(value, [0, 1], [-distance, distance]);
  }

export default function Section4(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100);
    
    return (
        <>
              <div className="flex justify-center pt-24  ">
            <div  className="grid   md:grid-rows-none md:grid-cols-2  w-[80rem] gap-6 md:gap-0   md:h-auto h-fix ">
            <motion.div style={{y}} className="row-span-1 md:col-span-1 pl-5 md:pl-10 pr-5   flex justify-center items-center md:none  ">
                    <img className="object-fill " src={photo} />
                </motion.div>
                <div  ref={ref} className=" row-span-2   md:col-span-1   flex justify-center md:justify-end  h-fit   md:h-full ">
                   <div className=" flex flex-col sm:w-4/5 w-full justify-start md:justify-center items-center   "> 
                    <div className="pb-10 justify-center items-center flex flex-col">
                        <p className="font-cormorant-gara italic text-[#f5989d]   text-lg">Our lookbook</p>
                        <h2 className="font-cormorant-uni leading-none pb-4 text-[35px] sm:text-[44px] md:text-[40px] lg:text-[48px] xl:text-[52px]">Fall/Winter ‘18</h2>
                    </div>
                    <div className=" bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]  items-center justify-center w-[166px]">
                        <button className="bg-white  font-work-sans text-xs pt-5 pb-5 pl-12 pr-12 ">SHOP NOW</button>
                    </div>
                  </div> 
                </div>
                
            </div>
         </div>
        </>
    )
}