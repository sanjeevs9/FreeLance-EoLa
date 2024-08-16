import { useContext, useEffect, useRef, useState } from "react"
import { ProductContext } from "./ContextProduct"
import { useParams } from "react-router-dom";
import axios from "axios";
import bag from "../assets/bag.jpeg"
import { motion,useScroll,useTransform } from "framer-motion";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FullScreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function useParallax(value,distance) {
    // window.innerWidth<=1024?distance=0:distance
    console.log(distance)
    return useTransform(value, [0,1], [0, distance]);
  }

export default function SinglePrdocut(){
    const {loading,product} =useContext(ProductContext);
    const {id} =useParams();
    const[data,setdata]=useState();
    const [open, setOpen] = React.useState(false);

   
    const[distance,setdistance]=useState(0);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setdistance(400)
                console.log("ehjfdb")
            }
           
            
        }
        window.scrollTo(0, 0);

        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
            setdistance(0);
        }
    },[])

    const ref=useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, distance);
    
  


    

    useEffect(()=>{
        if(!loading){
            function fetchProduct(){
                const dataa=product.filter((x)=>x.SKU===id)
                setdata(dataa)
                console.log(dataa[0])
                console.log("faskdnfajkdsflbdsfjk")
                
             }
             fetchProduct();
        }
      console.log(loading)
    
   },[loading])

 
    
      console.log("sadfbasdjfbjasdfjlsdfjlb") 
      

    return(
        <>
        <div className="h-[100rem]">
      <div  className="p-5  z-10  h-fit ">
                <div  className="h-[10rem] sm:h-[13rem] flex justify-center items-center bg-red-400 md:h-[16rem] lg:h-[25rem] xl:h-[27rem] 2xl:h-[35rem]  relative z-10 overflow-hidden">
       <motion.img style={{y}} className={`absolute  w-full   h-max  `} src={bag}></motion.img>
       <div  className="bg-black flex justify-center flex-col items-center w-fit h-fit  z-20 ">
       <div className="z-1 flex flex-col bg-white    w-[12rem] 2xl:w-[28rem]  xl:w-[27rem] lg:w-[25rem] md:w-[20rem] sm:w-[17rem]   h-[3rem] sm:h-[6rem]   2xl:h-[12rem]  xl:h-[10rem] lg:h-[9rem] md:h-[8rem]  ">
                        <div className="items-center text-center  flex flex-col h-full  justify-center">
                         <p className="hidden sm:block text-sm md:text-lg    font-cormorant-gara text-[#f5989d]  italic">Coming To Your Address</p>
                        
                       
                         <h2 className="  text-4xl  lg:text-6xl sm:text-4xl    font-cormorant-uni  ">EoLa SHOP</h2>
                        
                        
                         </div>
                        
                    </div>
       </div>
                </div>
            </div>
            {loading || !data || !data[0]?"loading....":
            <div  className="bg-red-300" ref={ref}>
            <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[FullScreen,Zoom]}
        slides={[
          {
            src: data[0].image,
            alt: "image 1",
            width: 3840,
            height: 6837,
            srcSet: [
              { src: data[0].image, width: 3840, height: 2560 },
              { src: data[0].image, width: 640, height: 427 },
              { src: data[0].image, width: 1200, height: 800 },
              { src: data[0].image, width: 2048, height: 1365 },
              { src: data[0].image, width: 3840, height: 2560 },
            ],
          },
          // ...
        ]}
      />
      afsdf
 
 
    {data && data[0] && (
        <div>
            {data[0].image}
        </div>
    )}
            </div>
            }
            
            </div>
        </>
    )
}