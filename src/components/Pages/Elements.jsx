import { useEffect } from "react";
import Footer from "../Footer";

const colorSwatches = [
    { color: "#f5989d", name: "Pink" },
    { color: "#cae2cd", name: "Green" },
    { color: "#a6a4a4", name: "Gray" },
    { color: "#e1eded", name: "Light" },
    { color: "#000000", name: "Black" },
    { color: "#ffffff", name: "White" },
];

const cardData = [
    {
        image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-1-768x941.jpg",
        date: "May 15, 2018", title: "Minimal Essentials",
        content: "A curated selection of timeless pieces designed for the modern wardrobe.",
    },
    {
        image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-2.jpg",
        date: "May 12, 2018", title: "Summer Lookbook",
        content: "Explore the latest trends and styling ideas for the upcoming season.",
    },
    {
        image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-3-768x941.jpg",
        date: "May 8, 2018", title: "Behind the Brand",
        content: "Discover the craftsmanship and story behind every piece we create.",
    },
];

export default function Elements() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="bg-[#f5f5f7] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
                <div className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg mb-2 sm:mb-3">
                    Our Design
                </div>
                <h1 className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl">Elements</h1>
            </div>

            {/* Typography Section */}
            <div className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-5 md:px-10 lg:px-20">
                <h2 className="font-cormorant-uni text-2xl sm:text-3xl mb-6 sm:mb-8">Typography</h2>

                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-cormorant-uni / Heading 1</p>
                        <h1 className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl">The Art of Elegance</h1>
                    </div>
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-cormorant-uni / Heading 2</p>
                        <h2 className="font-cormorant-uni text-2xl sm:text-3xl md:text-4xl">Crafted with Care</h2>
                    </div>
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-cormorant-uni / Heading 3</p>
                        <h3 className="font-cormorant-uni text-xl sm:text-2xl md:text-3xl">Modern Simplicity</h3>
                    </div>
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-cormorant-uni / Heading 4</p>
                        <h4 className="font-cormorant-uni text-lg sm:text-xl md:text-2xl">Timeless Design</h4>
                    </div>
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-cormorant-gara / Italic Subtitle</p>
                        <p className="font-cormorant-gara italic text-lg sm:text-xl text-[#f5989d] font-medium">spring / summer '18 collection</p>
                    </div>
                    <div>
                        <p className="font-work-sans text-xs text-[#a6a4a4] mb-1">font-work-sans / Body Text</p>
                        <p className="font-work-sans font-extralight text-[#a6a4a4] max-w-2xl text-sm sm:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-5 md:px-10 lg:px-20">
                <h2 className="font-cormorant-uni text-2xl sm:text-3xl mb-6 sm:mb-8">Buttons</h2>

                <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                    <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px] cursor-pointer">
                        <div className="bg-white px-6 sm:px-8 py-3">
                            <span className="font-work-sans text-xs sm:text-sm tracking-wider">GRADIENT BORDER</span>
                        </div>
                    </div>
                    <button className="bg-[#f5989d] text-white px-6 sm:px-8 py-3 font-work-sans text-xs sm:text-sm tracking-wider cursor-pointer hover:bg-[#e88a8f] transition-colors">
                        SOLID PINK
                    </button>
                    <button className="border border-black px-6 sm:px-8 py-3 font-work-sans text-xs sm:text-sm tracking-wider cursor-pointer hover:bg-black hover:text-white transition-all">
                        OUTLINED
                    </button>
                </div>
            </div>

            {/* Colors Section */}
            <div className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-5 md:px-10 lg:px-20">
                <h2 className="font-cormorant-uni text-2xl sm:text-3xl mb-6 sm:mb-8">Color Palette</h2>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
                    {colorSwatches.map((swatch) => (
                        <div key={swatch.color} className="flex flex-col items-center">
                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded border border-gray-200"
                                style={{ backgroundColor: swatch.color }}
                            />
                            <p className="font-work-sans text-xs sm:text-sm mt-2">{swatch.name}</p>
                            <p className="font-work-sans text-[10px] sm:text-xs text-[#a6a4a4]">{swatch.color}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards Section */}
            <div className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-5 md:px-10 lg:px-20">
                <h2 className="font-cormorant-uni text-2xl sm:text-3xl mb-6 sm:mb-8">Cards</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {cardData.map((card, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="overflow-hidden">
                                <img className="w-full h-auto object-cover" src={card.image} alt={card.title} />
                            </div>
                            <div className="pt-3 sm:pt-4">
                                <div className="text-[#f5989d] font-cormorant-gara text-lg sm:text-xl italic font-medium">{card.date}</div>
                                <div className="font-cormorant-uni pb-3 sm:pb-4 text-xl sm:text-2xl md:text-3xl">{card.title}</div>
                                <div className="text-[#a6a4a4] pb-4 sm:pb-6 font-work-sans font-extralight text-sm">{card.content}</div>
                                <div className="font-work-sans text-sm underline cursor-pointer hover:text-[#f5989d] transition-colors">Read More</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
