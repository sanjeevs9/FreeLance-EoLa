const img = "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-5.png";

export default function ContactUs2() {
    return (
        <>
            <div className="flex justify-center items-center px-4 sm:px-5 md:px-10 pt-16 sm:pt-20 lg:pt-32">
                <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 w-full max-w-[72rem] items-center">
                    <div className="w-full flex justify-center">
                        <img className="w-full max-w-md sm:max-w-lg md:max-w-none" src={img} alt="EoLa" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-20">
                    <div className="font-cormorant-uni text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center px-4">
                        Join Our Mailing List & Get The Latest Updates
                    </div>
                    <div>
                    <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[2.5px] items-center justify-center w-[280px] h-[55px] sm:w-[400px] sm:h-[60px] md:w-[500px] md:h-[68px] lg:w-[570px] lg:h-[75px]">
                        <div className="bg-white flex justify-between h-full pl-3 sm:pl-6 md:pl-10 text-black">
                        <input className="font-work-sans text-black placeholder-black text-xs sm:text-sm outline-none w-full mr-2 font-light" placeholder="Your e-mail"/>
                        <button className="pr-3 sm:pr-6 md:pr-10 font-work-sans text-xs tracking-wide sm:tracking-widest whitespace-nowrap">/ ‎  SUBSCRIBE</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
