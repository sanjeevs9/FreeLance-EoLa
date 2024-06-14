

export default function LastCarouselContent({image,title,content}){
    return(
        <>
            <div>
                <div className="sm:relative ">
                    <img src={image}/>
                </div>
                <div className="flex sm:absolute bottom-5 right-5 bg-white flex-col justify-center  p-5 md:p-8 lg:p-10  sm:pl-5 ">
                    <div className="font-bold font-cormorant-uni text-xl sm:text-lg md:text-xl ">
                        {title}
                    </div>
                    <div className="font-work-sans text-sm sm:text-base lg:text-lg text-[#a6a4a4] sm:w-44 md:w-60 lg:w-auto ">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}