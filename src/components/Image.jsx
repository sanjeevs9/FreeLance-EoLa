import { useRef } from "react"
import {
    motion,
    useScroll,
    useTransform,
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
            <div ref={ref} className="px-3 sm:px-5 pt-3 z-10 h-fit">
                <div className="h-[8rem] sm:h-[13rem] lg:h-[16rem] xl:h-[23rem] relative z-10 overflow-hidden">
                    <motion.img style={{y}} className="absolute top-[-10px] sm:top-[-40px] md:top-[-60px] lg:top-[-120px] w-full -z-40 h-max" src={img} alt="Parallax"/>
                </div>
            </div>
        </>
    )
}
