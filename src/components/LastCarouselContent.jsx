

export default function LastCarouselContent({image,title,content}){
    return(
        <>
            <div>
                <div className="sm:relative">
                    <img className="w-full h-auto object-cover" src={image} alt={title}/>
                </div>
                <div className="flex sm:absolute bottom-3 sm:bottom-5 right-3 sm:right-5 bg-white flex-col justify-center p-4 sm:p-5 md:p-8 lg:p-10">
                    <div className="font-bold font-cormorant-uni text-lg sm:text-lg md:text-xl">
                        {title}
                    </div>
                    <div className="font-work-sans text-sm sm:text-base lg:text-lg text-[#a6a4a4] sm:w-44 md:w-60 lg:w-auto">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}
