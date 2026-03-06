import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../ContextProduct";
import Product from "../product";
import Footer from "../Footer";

const categories = ["All", "Accessories", "Clothing", "Footwear", "Furniture", "Jewelry"];

export default function Shop() {
    const { loading, product } = useContext(ProductContext);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen font-work-sans text-[#a6a4a4]">Loading....</div>;
    }

    const filteredProducts = activeCategory === "All"
        ? product
        : product.filter((item) => item.category === activeCategory);

    return (
        <>
            {/* Hero Banner */}
            <div className="bg-[#f5f5f7] flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4">
                <div className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                    spring / summer '18 collection
                </div>
                <h1 className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl">
                    Our Shop
                </h1>
            </div>

            {/* Filter Bar */}
            <div className="flex justify-center px-3 sm:px-5 pt-6 sm:pt-10 pb-4 sm:pb-6">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 font-work-sans text-[11px] sm:text-[13px]">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`cursor-pointer relative text-black transition-all
                                ${activeCategory === cat
                                    ? "before:w-[50%] after:w-[50%] text-[#f5989d]"
                                    : "before:w-0 after:w-0 hover:before:w-[50%] hover:after:w-[50%]"
                                }
                                before:transition-[width] before:duration-300 before:absolute before:bg-[#f5989d] before:origin-center before:h-[1px] before:bottom-0 before:left-[50%]
                                after:transition-[width] after:duration-300 after:absolute after:bg-[#f5989d] after:origin-center after:h-[1px] after:bottom-0 after:right-[50%]
                                hover:text-[#f5989d] pb-1`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex px-3 sm:px-5 md:px-10 pt-4 sm:pt-8 pb-6 sm:pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-5 w-full">
                    {filteredProducts.map((item) => (
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

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="flex justify-center items-center py-12 sm:py-20">
                    <p className="font-work-sans text-[#a6a4a4] text-sm">
                        No products found in this category.
                    </p>
                </div>
            )}

            <Footer />
        </>
    );
}
