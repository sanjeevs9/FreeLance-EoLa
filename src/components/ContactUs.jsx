import Map from "./Map"

export default function ContactUs(){
    return(
        <>
        <div className="flex justify-center px-3 sm:px-5 pt-12 sm:pt-20 md:pt-28">
            <div className="flex flex-col lg:flex-row w-full max-w-[72rem] px-3 sm:px-5 md:px-10 gap-12 sm:gap-16 md:gap-24 lg:gap-40">
                <div className="justify-center flex">
                    <Map/>
                </div>
                <div className="flex flex-col w-full gap-6 sm:gap-8 md:gap-10">
                    <div>
                    <div className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg md:text-xl">Elegant Shop</div>
                    <div className="font-cormorant-uni text-2xl sm:text-3xl md:text-4xl font-medium">Contact Us</div>
                    </div>
                    <input placeholder="Name"
                        className="peer w-full border-b border-blue-gray-200 bg-transparent pb-2 font-sans text-sm font-normal text-[#a6a4a4] outline outline-0" />
                    <input placeholder="Email *"
                        className="peer w-full border-b border-blue-gray-200 bg-transparent pb-2 font-sans text-sm font-normal text-[#a6a4a4] outline outline-0" />
                    <input placeholder="Message"
                        className="peer pt-5 w-full border-b border-blue-gray-200 bg-transparent pb-2 font-sans text-sm font-normal text-[#a6a4a4] outline outline-0" />
                    <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px] items-center justify-center w-[138px]">
                        <button className="bg-white font-work-sans text-xs pt-5 pb-5 pl-12 pr-12 tracking-widest">SEND</button>
                    </div>
                </div>
               </div>
        </div>
        </>
    )
}
