const img = "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-5.png";

export default function ContactUs2() {
    return (
        <>
            <div className="flex justify-center items-center p-10 pl-10 pr-10 sm:p-5 pt-28 lg:pt-32 ">
                <div className="flex flex-col gap-32 w-[72rem] h-auto   items-center">
                    <div className="">
                        <img className="size-fit  " src={img} />
                    </div>
                    <div className="font-cormorant-uni text-2xl sm:text-4xl xl:text-5xl  text-center xl:w-auto md:w-2/3">
                        Join Our Mailing List & Get The Latest Updates
                    </div>
                    <div>
                    <div className=" bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[2.5px]  items-center justify-center w-[300px] h-[60px] sm:w-[500px] sm:h-[68px] md:w-[570px] md:h-[75px]">
                        <div className="bg-white flex justify-between h-full pl-4 sm:pl-10 text-black">
                        <input className=" font-work-sans text-black placeholder-black text-xs sm:text-sm outline-none   sm:w-80 font-light" placeholder="Your e-mail"/>
                        <button className="pr-4 sm:pr-10 font-work-sans text-xs tracking-wide sm:tracking-widest">/ ‎  SUBSCRIBE</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
