import { useRef } from "react"
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

const img="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-parallax.jpg"

function useParallax(value,distance) {
    window.innerWidth<=768?distance=30:distance
    return useTransform(value, [0, 1], [-distance, distance]);
  }

export default function Image(){
    const ref=useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 60);
    
    return (
        <>
            <div ref={ref} className="p-5  z-10  h-fit">
                <div  className="h-[10rem] sm:h-[13rem] lg:h-[16rem] xl:h-[23rem]  relative z-10 overflow-hidden">
       <motion.img style={{y}} className={`absolute ${window.innerWidth<=1024?"top-[-10px]":"top-[-120px]"}  w-full -z-40 h-max `} src={img}></motion.img>
                </div>
            </div>
        </>
    )
}