import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import bg from "../assets/6533.jpg"
import { useNavigate } from "react-router-dom";


export default function Product({name,price,image,id}){
    const [hover,sethover]=useState(false);
    const navigate =useNavigate();

    function handlemouseEnter(){
        sethover(true);
    }

    function handlemouseLeave(){
        sethover(false);
    }
    const title = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "tween",
                duration: 0.4, // Increased duration for a slower effect
                ease: "easeInOut", // Smooth and calm easing
            },
        },
    };
    const money = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "tween",
                duration: 0.5, // Increased duration for a slower effect
                ease: "easeInOut", // Smooth and calm easing
            },
        },
    };
    const btn = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "tween",
                duration: 0.6, // Increased duration for a slower effect
                ease: "easeInOut", // Smooth and calm easing
            },
        },
    };
    

    return(
        <>
            <div onClick={()=>{navigate(`/product/${id}`)}} onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave} style={{ backgroundImage: hover ? `url(${bg})` : `url(${image})` }}  
             className={` bg-cover bg-[#f5f5f7]  p-5 md:p-4  flex justify-center hover:cursor-pointer h-[27rem] sm:h-[25rem] md:h-[20rem]  w-full lg:h-[17rem] xl:h-[29rem] 2xl:h-[32rem]`}
            > 
                <div   className={` ${hover?"flex":"hidden"}  flex-col gap-2 justify-center items-center bg-white w-full `}>
                <motion.div variants={title} initial="hidden" animate={hover?"visible":"hidden"} className="font-cormorant-uni font-semibold text-xl">
                    {name}
                </motion.div>
                <motion.div variants={money} initial="hidden" animate={hover?"visible":"hidden"} className="text-gray-500 text-base md:text-xs pb-5 ">
                   ${price}
                </motion.div>
                <motion.div variants={btn} initial="hidden" animate={hover?"visible":"hidden"} className=" bg-[#f5989d] p-[1.9px]  items-center justify-center w-[153px] lg:w-[151px] xl:w-[155px]">
                        <button className="text-center  text-base lg:text-sm bg-white hover:bg-[#f5989d] hover:text-white  font-cormorant-gara  pt-3 pb-3 pl-8 pr-9 md:pt-3 md:pb-3 lg:pt-3 lg:pb-3 lg:pl-10 lg:pr-9 xl:pt-4 xl:pb-4 xl:pl-10 xl:pr-10">Add To Cart</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}