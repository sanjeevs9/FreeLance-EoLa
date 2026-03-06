
export default function CarouselContent({content,writer}){
    return(
        <>
        <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-11/12 sm:w-10/12">
            <div className="font-work-sans text-4xl sm:text-5xl md:text-6xl">"</div>
            <div className="pb-6 sm:pb-10 text-center font-cormorant-gara italic text-[#a6a4a4] text-[15px] sm:text-[18px] md:text-[22px] leading-relaxed">{content}</div>
            <div className="font-cormorant-uni font-bold text-sm sm:text-base md:text-lg">{writer}</div>
        </div>
        </div>
        </>
    )
}
