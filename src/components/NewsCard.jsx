
export default function NewsCard({image,date,title,content}){
    return(
        <>
        <div className="flex flex-col ">
            <div className=" w-fit">
                <img className="size-fit 2xl:h-[28rem]   md:h-auto " src={image}></img>
            </div>
            <div className="pt-4 w-fit ">
                <div className="w-3/4">
                    <div className="text-[#f5989d] font-cormorant-gara text-xl italic font-medium">{date}</div>
                    <div className="font-cormorant-uni pb-4 text-3xl">{title}</div>
                    <div className="text-[#a6a4a4] pb-6 font-work-sans font-extralight">{content}</div>
                    <div className="font-work-sans text-sm underline">Read More</div>
                </div>
            </div>
        </div>
        </>
    )
}