import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const images = [
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-1.jpg", title: "Green Scarf", span: "row-span-2" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-2.jpg", title: "Pink Top", span: "" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-3.jpg", title: "Golden Shoe", span: "" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.jpg", title: "Fall Collection", span: "md:col-span-2 md:row-span-2" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-5.jpg", title: "Slim Wallet", span: "" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-6.jpg", title: "Gloves With Pearls", span: "row-span-2" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-7.jpg", title: "Empress Earrings", span: "" },
  { src: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-8.jpg", title: "Print Blazer", span: "" },
];

export default function Lookbook() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
        <div className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg mb-2 sm:mb-3">
          Our lookbook
        </div>
        <h1 className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl">
          Fall/Winter '18
        </h1>
      </div>

      {/* Masonry Gallery */}
      <div className="px-3 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-1 sm:gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden relative cursor-pointer ${image.span}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`object-cover w-full h-full transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="font-cormorant-uni text-white text-sm sm:text-lg md:text-2xl tracking-wide text-center px-2">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
        <h2 className="font-cormorant-uni text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 max-w-xl">
          Eco-friendly fabrics are in our business focus
        </h2>
        <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]">
          <button
            onClick={() => navigate("/shop")}
            className="bg-white font-work-sans text-xs tracking-widest px-8 sm:px-10 py-4 hover:bg-[#f5989d] hover:text-white transition-all duration-300"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
