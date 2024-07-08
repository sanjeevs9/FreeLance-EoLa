
import { animate, delay, easeIn, motion, spring, transform } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const container = {
    hidden: { opacity: 0, scale: 0,top:1/2,left:1/2,transform:{translate:[-1/2,-1/2]} },
    visible: {
      opacity: 1,
      scale: 1,
     transition:{
        delay:0.2,
        duration:0.5,
     }
    }
  };
  const p = {
    hidden: { opacity: 0, scale: 0,y:100 },
    visible: {
      opacity: 1,
      scale: 1,
      y:0,
     transition:{
        delay:0.7,
        duration:0.5,
        
        
     }
    }
  };

  const t = {
    hidden: { opacity: 0, scale: 0,y:100 },
    visible: {
      opacity: 1,
      scale: 1,
      y:0,
     transition:{
        delay:0.9,
        duration:0.5,
     }
    }
  };

  const txt = {
    hidden: { opacity: 0, scale: 0,y:50 },
    visible: {
      opacity: 1,
      scale: 1,
      y:0,
     transition:{
        delay:1.1,
        duration:0.5,
     }
    }
  };

export default function ImageCard({image,paragraph,title,text}){
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    return (
        <>
        <div ref={ref} className="z-0 relative">
            <div>
                <img src={image} className="h-screen w-full object-cover"/>
                    <motion.div className=" " variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <div className="z-1 flex flex-col bg-white absolute justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[19rem] 2xl:w-[47rem]  xl:w-[44rem] lg:w-[42rem] md:w-[41rem] sm:w-[40rem]   h-[12.5rem]   2xl:h-[21rem]  xl:h-[20rem] lg:h-[19rem] md:h-[19rem] sm:h-[18rem] ">
                        <motion.div variants={p} initial="hidden" animate={inView ? "visible" : "hidden"}>
                         <p className="text-sm md:text-xl   font-cormorant-gara text-[#f5989d]  italic">{paragraph}</p>
                         </motion.div>
                         <motion.div variants={t} initial="hidden" animate={inView ? "visible" : "hidden"}>
                         <h2 className="  text-4xl md:text-6xl sm:text-5xl   font-cormorant-uni font-light pb-10">{title}</h2>
                         </motion.div>
                         <motion.div variants={txt} initial="hidden" animate={inView ? "visible" : "hidden"}>
                         <div className=" bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.7px]  items-center justify-center">
                            
                            <button className="bg-white  font-work-sans text-sm pt-4 pb-4 pl-11 pr-11 sm:pt-5 sm:pb-5 sm:pl-12 sm:pr-12 ">{text}</button>
                         </div>
                         </motion.div>
                    </div>
                    </motion.div>
            </div>
            
        </div>
        </>
    )
}