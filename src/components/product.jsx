import { useContext, useState } from "react"
import { motion } from "framer-motion";
import bg from "../assets/6533.jpg"
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";


export default function Product({name,price,image,id}){
    const [hover,sethover]=useState(false);
    const navigate =useNavigate();
    const { addToCart } = useContext(CartContext);

    function handlemouseEnter(){
        sethover(true);
    }

    function handlemouseLeave(){
        sethover(false);
    }

    function handleAddToCart(e){
        e.stopPropagation();
        addToCart({ name, price, image, SKU: id });
    }

    const title = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
        },
    };
    const money = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
        },
    };
    const btn = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
        },
    };


    return(
        <>
            <div onClick={()=>{navigate(`/product/${id}`)}} onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave} style={{ backgroundImage: hover ? `url(${bg})` : `url(${image})` }}
             className="bg-cover bg-center bg-[#f5f5f7] p-4 sm:p-5 md:p-4 flex justify-center hover:cursor-pointer h-[22rem] sm:h-[25rem] md:h-[20rem] w-full lg:h-[17rem] xl:h-[29rem] 2xl:h-[32rem]"
            >
                <div className={`${hover?"flex":"hidden"} flex-col gap-2 justify-center items-center bg-white w-full`}>
                <motion.div variants={title} initial="hidden" animate={hover?"visible":"hidden"} className="font-cormorant-uni font-semibold text-lg sm:text-xl px-2 text-center">
                    {name}
                </motion.div>
                <motion.div variants={money} initial="hidden" animate={hover?"visible":"hidden"} className="text-gray-500 text-sm sm:text-base md:text-xs pb-3 sm:pb-5">
                   ${price}
                </motion.div>
                <motion.div variants={btn} initial="hidden" animate={hover?"visible":"hidden"} className="bg-[#f5989d] p-[1.9px] items-center justify-center">
                        <button onClick={handleAddToCart} className="text-center text-sm sm:text-base lg:text-sm bg-white hover:bg-[#f5989d] hover:text-white font-cormorant-gara pt-2 pb-2 pl-6 pr-6 sm:pt-3 sm:pb-3 sm:pl-8 sm:pr-9 lg:pl-10 lg:pr-9 xl:pt-4 xl:pb-4 xl:pl-10 xl:pr-10">Add To Cart</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
