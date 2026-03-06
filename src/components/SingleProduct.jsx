import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "./ContextProduct";
import { CartContext } from "./CartContext";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FullScreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import bag from "../assets/bag.jpeg";
import Footer from "./Footer";
import Product from "./product";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function SinglePrdocut() {
  const { loading, product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [distance, setdistance] = useState(0);

  // Parallax setup
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, distance);

  // Scroll to top on mount and id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Enable parallax after first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setdistance(400);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setdistance(0);
    };
  }, []);

  // Fetch product data when loading completes or id changes
  useEffect(() => {
    if (!loading && product) {
      const dataa = product.filter((x) => x.SKU === id);
      setdata(dataa);
    }
  }, [loading, id, product]);

  // Quantity handlers
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    }
  };

  // Related products
  const relatedProducts =
    !loading && product && data && data[0]
      ? product.filter(
          (p) => p.category === data[0].category && p.SKU !== data[0].SKU
        )
      : [];

  return (
    <>
      <div>
        {/* Hero Banner with Parallax */}
        <div className="px-3 sm:px-5 pt-3 sm:pt-5 z-10 h-fit">
          <div className="h-[8rem] sm:h-[13rem] flex justify-center items-center md:h-[16rem] lg:h-[25rem] xl:h-[27rem] 2xl:h-[35rem] relative z-10 overflow-hidden">
            <motion.img
              style={{ y }}
              className="absolute w-full h-max"
              src={bag}
              alt="EoLa Shop Banner"
            />
            <div className="bg-black flex justify-center flex-col items-center w-fit h-fit z-20">
              <div className="z-1 flex flex-col bg-white w-[10rem] sm:w-[17rem] md:w-[20rem] lg:w-[25rem] xl:w-[27rem] 2xl:w-[28rem] h-[3rem] sm:h-[6rem] md:h-[8rem] lg:h-[9rem] xl:h-[10rem] 2xl:h-[12rem]">
                <div className="items-center text-center flex flex-col h-full justify-center px-2">
                  <p className="hidden sm:block text-sm md:text-lg font-cormorant-gara text-[#f5989d] italic">
                    Coming To Your Address
                  </p>
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-cormorant-uni">
                    EoLa SHOP
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading || !data || !data[0] ? (
          <div className="flex justify-center items-center h-[30rem]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-[#f5989d] border-t-transparent rounded-full animate-spin"></div>
              <p className="font-work-sans text-[#a6a4a4] text-sm tracking-widest">
                LOADING...
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Breadcrumb */}
            <div className="px-3 sm:px-3 sm:px-5 md:px-10 lg:px-20 xl:px-32 pt-4 sm:pt-6 pb-3 sm:pb-4">
              <div className="flex items-center gap-2 font-work-sans text-xs text-[#a6a4a4]">
                <span
                  className="cursor-pointer hover:text-[#f5989d] transition-colors"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
                <span>/</span>
                <span
                  className="cursor-pointer hover:text-[#f5989d] transition-colors"
                  onClick={() => navigate("/")}
                >
                  Shop
                </span>
                <span>/</span>
                <span className="text-black">{data[0].name}</span>
              </div>
            </div>

            {/* Product Section - Two Columns */}
            <div className="px-3 sm:px-5 md:px-10 lg:px-20 xl:px-32 pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column - Product Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <div className="bg-[#f5f5f7] flex justify-center items-center overflow-hidden">
                    <img
                      src={data[0].image}
                      alt={data[0].name}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Lightbox */}
                <Lightbox
                  open={open}
                  close={() => setOpen(false)}
                  plugins={[FullScreen, Zoom]}
                  slides={[
                    {
                      src: data[0].image,
                      alt: data[0].name,
                    },
                  ]}
                />

                {/* Right Column - Product Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="flex flex-col justify-center"
                >
                  {/* Product Name */}
                  <h1 className="font-cormorant-uni text-3xl sm:text-4xl lg:text-[42px] leading-tight pb-4">
                    {data[0].name}
                  </h1>

                  {/* Price */}
                  <p className="text-xl text-[#f5989d] font-work-sans pb-6">
                    ${data[0].price}.00
                  </p>

                  {/* Description */}
                  <p className="font-work-sans text-[#a6a4a4] text-sm leading-relaxed pb-8">
                    {data[0].description}
                  </p>

                  {/* Quantity + Add to Cart */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-8">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={handleDecrement}
                        className="w-10 h-12 flex items-center justify-center text-[#a6a4a4] hover:text-black transition-colors font-work-sans text-lg"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-12 h-12 text-center border-x border-gray-200 font-work-sans text-sm focus:outline-none"
                      />
                      <button
                        onClick={handleIncrement}
                        className="w-10 h-12 flex items-center justify-center text-[#a6a4a4] hover:text-black transition-colors font-work-sans text-lg"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]">
                      <button
                        onClick={() => addToCart(data[0])}
                        className="bg-white hover:bg-[#f5989d] hover:text-white transition-all duration-300 font-work-sans text-xs tracking-widest pt-4 pb-4 pl-10 pr-10"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

                  {/* SKU, Category, Tags */}
                  <div className="flex flex-col gap-2 font-work-sans text-sm">
                    <div className="flex gap-2">
                      <span className="text-black">SKU:</span>
                      <span className="text-[#a6a4a4]">{data[0].SKU}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-black">Category:</span>
                      <span className="text-[#a6a4a4]">
                        {data[0].category}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-black">Tags:</span>
                      <span className="text-[#a6a4a4]">
                        {data[0].tags.join(", ")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="px-3 sm:px-5 md:px-10 lg:px-20 xl:px-32 pb-16">
              {/* Tab Headers */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`font-cormorant-uni text-sm sm:text-lg pb-3 transition-colors relative ${
                    activeTab === "description"
                      ? "text-black"
                      : "text-[#a6a4a4] hover:text-black"
                  }`}
                >
                  Description
                  {activeTab === "description" && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f5989d]"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("additional")}
                  className={`font-cormorant-uni text-sm sm:text-lg pb-3 transition-colors relative ${
                    activeTab === "additional"
                      ? "text-black"
                      : "text-[#a6a4a4] hover:text-black"
                  }`}
                >
                  Additional Information
                  {activeTab === "additional" && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f5989d]"
                    />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[8rem]">
                {activeTab === "description" && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-work-sans text-[#a6a4a4] text-sm leading-relaxed max-w-3xl">
                      {data[0].description}
                    </p>
                  </motion.div>
                )}
                {activeTab === "additional" && (
                  <motion.div
                    key="additional"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <table className="font-work-sans text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-12 text-black font-medium">
                            Weight
                          </td>
                          <td className="py-4 text-[#a6a4a4]">
                            {data[0].additional.weight}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-12 text-black font-medium">
                            Dimensions
                          </td>
                          <td className="py-4 text-[#a6a4a4]">
                            {data[0].additional.dimensions}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="px-3 sm:px-5 md:px-10 lg:px-20 xl:px-32 pb-16">
                <div className="flex flex-col items-center pb-10">
                  <p className="font-cormorant-gara italic text-[#f5989d] text-lg">
                    You may also like
                  </p>
                  <h2 className="font-cormorant-uni text-3xl sm:text-4xl">
                    Related Products
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {relatedProducts.slice(0, 4).map((item) => (
                    <Product
                      key={item.SKU}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      id={item.SKU}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
