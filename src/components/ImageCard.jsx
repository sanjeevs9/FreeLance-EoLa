
export default function ImageCard({image,paragraph,title,text}){
    return (
        <>
        <div className="z-0 relative">
            <div>
                <img src={image} className="h-screen w-full object-cover"/>
                    <div className="z-1 flex flex-col bg-white absolute justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[29rem] 2xl:w-[47rem]  xl:w-[44rem] lg:w-[42rem] md:w-[41rem] sm:w-[40rem]   h-[16rem]   2xl:h-[21rem]  xl:h-[20rem] lg:h-[19rem] md:h-[19rem] sm:h-[18rem] ">
                         <p className="text-sm md:text-xl   font-cormorant-gara text-[#f5989d]  italic">{paragraph}</p>
                         <h2 className="  text-5xl md:text-6xl sm:text-5xl   font-cormorant-uni font-light pb-10">{title}</h2>
                         <div className=" bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.7px]  items-center justify-center">
                            <button className="bg-white  font-work-sans text-sm pt-5 pb-5 pl-12 pr-12 ">{text}</button>
                         </div>
                    </div>
            </div>
            
        </div>
        </>
    )
}