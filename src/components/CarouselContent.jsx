
export default function CarouselContent({content,writer}){
    return(
        <>
        <div className="flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center w-10/12">
            <div className="font-work-sans text-6xl">“</div>
            <div className="pb-10 text-center font-cormorant-gara italic text-[#a6a4a4] text-[18px] sm:text-[22px]  ">{content}</div>
            <div className="font-cormorant-uni font-bold  sm:text-lg">{writer}</div>
        </div>
        </div>
        </>
    )
}