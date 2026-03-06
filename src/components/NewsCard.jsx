
import { useNavigate } from "react-router-dom";

export default function NewsCard({image,date,title,content}){
    const navigate = useNavigate();
    return(
        <>
        <div className="flex flex-col">
            <div className="w-full overflow-hidden">
                <img className="w-full h-auto object-cover" src={image} alt={title}/>
            </div>
            <div className="pt-3 sm:pt-4">
                <div className="w-full sm:w-3/4">
                    <div className="text-[#f5989d] font-cormorant-gara text-lg sm:text-xl italic font-medium">{date}</div>
                    <div className="font-cormorant-uni pb-3 sm:pb-4 text-xl sm:text-2xl md:text-3xl">{title}</div>
                    <div className="text-[#a6a4a4] pb-4 sm:pb-6 font-work-sans font-extralight text-sm sm:text-base">{content}</div>
                    <div onClick={()=>navigate('/blog')} className="font-work-sans text-sm underline cursor-pointer hover:text-[#f5989d] transition-colors">Read More</div>
                </div>
            </div>
        </div>
        </>
    )
}
