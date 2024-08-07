import { useEffect, useState } from "react"


export default function Product({name,price,image}){
    const [hover,sethover]=useState(false);

    function handlemouseEnter(){
        sethover(true);
    }

    function handlemouseLeave(){
        sethover(false);
    }

    

    return(
        <>
            <div onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave} style={{ backgroundImage: hover ? 'none' : `url(${image})` }} 
             className={` bg-cover bg-[#f5f5f7]  p-4  flex justify-center hover:cursor-pointer h-[40rem] sm:h-[25rem] md:h-[20rem] lg:h-[17rem] xl:h-[29rem] 2xl:h-[32rem]`}
            > 
                <div className={` ${hover?"flex":"hidden"}  flex-col gap-2 justify-center items-center bg-white w-full `}>
                <div className="font-cormorant-uni font-semibold">
                    {name}
                </div>
                <div className="text-gray-500 text-xs pb-5">
                   ${price}
                </div>
                <div className=" bg-[#f5989d] p-[1.9px]  items-center justify-center w-[153px] md:w-[130px] xl:w-[153px]">
                        <button className="text-xs bg-white hover:bg-[#f5989d] hover:text-white  font-work-sans  pt-5 pb-5 pl-10 pr-10 md:pt-3 md:pb-3 xl:pt-5 xl:pb-5 xl:pl-10 xl:pr-10">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}