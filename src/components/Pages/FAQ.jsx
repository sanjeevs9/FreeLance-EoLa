import image from "../../assets/faq-title-img.jpeg"

export default function FAQ(){
    return (
        <>
        <div>
            <div className="p-5  flex flex-col md:gap-14 justify-center items-center">
                <div className="flex  w-full lg:h-[27rem] xl:h-[30rem] overflow-hidden">
                    <img className="w-full object-contain xl:object-cover xl:scale-110 2xl:scale-100 scale-150" src={image}/>
                </div>
                <div className="flex flex-col md:flex-row md:p-16  p-5 gap-10 md:max-w-[85rem] ">
                    <div className="flex md:w-4/12 bg-white">
                        <div className="flex flex-col">
                            <div className="font-cormorant-gara text-Pred italic text-sm lg:text-base xl:text-xl">saving our environment</div>
                            <div className="font-cormorant-gara text-2xl font-medium md:text-3xl lg:text-4xl ">
                            USEFUL QUESTIONS
                            </div>
                            <div className="font-work-sans text-gray-400 text-sm pt-5">
                            Lorem ipsum dolor sit amet, munere possit oportere ut pri, pri suavitate persequeris ad.
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-10/12 flex flex-col gap-10 ">
                        <div className="flex  flex-col gap-5"> 
                            <div className="font-cormorant-uni  text-xl sm:text-2xl lg:text-3xl xl:text-3xl  ">
                            1. Branding is a more efficient way to sell things?
                            </div>
                            <div className="font-work-sans text-gray-500 text-xs md:text-sm ">
                            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et male suada fames ac ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor.
                            </div>
                        </div>
                        <div className="flex  flex-col gap-5"> 
                            <div className="font-cormorant-uni text-xl sm:text-2xl lg:text-3xl ">
                            2. It’s better to be first in the mind than in the marketplace?
                            </div>
                            <div className="font-work-sans text-gray-500 text-xs md:text-sm ">
                            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat.
                            </div>
                        </div>
                        <div className="flex  flex-col gap-5"> 
                            <div className="font-cormorant-uni text-xl sm:text-2xl lg:text-3xl "> 
                            3. marketing is a company’s ultimate objective?
                            </div>
                            <div className="font-work-sans text-gray-500 text-xs md:text-sm ">
                            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et male suada fames ac ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}