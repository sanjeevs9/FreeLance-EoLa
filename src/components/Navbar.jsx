import user from "../assets/user.png"
import bag from "../assets/shopping-bag.png"
import search from "../assets/search.png"
import bar from "../assets/burger-bar.png"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"
import { ProductContext } from "./ContextProduct"


export default function Navbar({className}){
    const [drop,setDrop]=useState(false);
    const [searchOpen,setSearchOpen]=useState(false);
    const [cartOpen,setCartOpen]=useState(false);
    const [searchQuery,setSearchQuery]=useState("");
    const [pagesOpen,setPagesOpen]=useState(false);
    const navigate=useNavigate();
    const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);
    const { loading, product } = useContext(ProductContext);

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth > 1024){
                setDrop(false);
            }
        }
        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[])

    // Close cart sidebar on route change
    useEffect(()=>{
        setCartOpen(false);
        setSearchOpen(false);
    },[navigate])

    // Search results
    const searchResults = !loading && product && searchQuery.trim().length > 0
        ? product.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : [];

    const navLinkClass = "cursor-pointer relative text-black transition-all before:transition-[width] before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:top-5 before:left-[50%] after:transition-[width] after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:top-5 after:right-[50%]";

    function handleNav(path){
        navigate(path);
        setDrop(false);
        setPagesOpen(false);
    }

    return(
        <>
        <div className={`flex justify-between min-h-16 font-work-sans text-[13px] relative ${className}`}>
            <div onClick={()=>{navigate('/')}} className="cursor-pointer flex-shrink-0">
                <img className="object-cover w-14 sm:w-16" src="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/logo-divided-1.png" alt="EoLa"/>
            </div>
            <div className="flex justify-between gap-4 sm:gap-6 lg:gap-10 pr-2 items-center">
                <div className="hidden lg:flex">
                    <ul className="flex justify-between gap-6 xl:gap-10 pt-1">
                        <li onClick={()=>handleNav('/')} className="cursor-pointer underline underline-offset-4">HOME</li>
                        <li className={`${navLinkClass} group pb-3`}
                            onMouseEnter={()=>setPagesOpen(true)}
                            onMouseLeave={()=>setPagesOpen(false)}>
                            PAGES
                            {pagesOpen && (
                                <div className="absolute top-8 left-0 pt-3">
                                    <div className="bg-white shadow-md min-w-[160px] py-2 z-50">
                                        <div onClick={()=>handleNav('/faq')} className="px-5 py-2 text-xs hover:text-[#f5989d] hover:bg-gray-50 cursor-pointer">FAQ</div>
                                        <div onClick={()=>handleNav('/contact')} className="px-5 py-2 text-xs hover:text-[#f5989d] hover:bg-gray-50 cursor-pointer">CONTACT</div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li onClick={()=>handleNav('/shop')} className={navLinkClass}>PRODUCTS</li>
                        <li onClick={()=>handleNav('/lookbook')} className={navLinkClass}>LOOKBOOK</li>
                        <li onClick={()=>handleNav('/blog')} className={navLinkClass}>BLOG</li>
                        <li onClick={()=>handleNav('/elements')} className={navLinkClass}>ELEMENTS</li>
                    </ul>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300 hidden sm:block">
                    <img src={user} className="object-cover w-5" alt="User"/>
                </div>
                <div onClick={()=>{setSearchOpen(true);setCartOpen(false)}} className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300">
                    <img src={search} className="object-cover w-5" alt="Search"/>
                </div>
                <div onClick={()=>{setCartOpen(!cartOpen);setSearchOpen(false)}} className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300 relative">
                    <img src={bag} className="object-cover w-5" alt="Cart"/>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#f5989d] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-work-sans">
                            {cartCount}
                        </span>
                    )}
                </div>
                <div className="lg:hidden cursor-pointer transition ease-in-out delay-100 hover:scale-110" onClick={()=>{setDrop(!drop)}}>
                    <img className="object-cover w-8 sm:w-10" src={bar} alt="Menu"/>
                </div>
                {/* Mobile dropdown */}
                {drop && (
                    <div className="absolute top-14 right-0 bg-white w-60 rounded-sm shadow-md z-50">
                        <ul className="gap-3 flex flex-col pl-5 pr-5 pt-3 pb-3">
                            <li onClick={()=>handleNav('/')} className="cursor-pointer text-[#f5989d]">HOME</li>
                            <hr/>
                            <li onClick={()=>handleNav('/faq')} className="cursor-pointer relative text-black hover:text-[#f5989d]">FAQ</li>
                            <hr/>
                            <li onClick={()=>handleNav('/contact')} className="cursor-pointer relative text-black hover:text-[#f5989d]">CONTACT</li>
                            <hr/>
                            <li onClick={()=>handleNav('/shop')} className="cursor-pointer relative text-black hover:text-[#f5989d]">PRODUCTS</li>
                            <hr/>
                            <li onClick={()=>handleNav('/lookbook')} className="cursor-pointer relative text-black hover:text-[#f5989d]">LOOKBOOK</li>
                            <hr/>
                            <li onClick={()=>handleNav('/blog')} className="cursor-pointer relative text-black hover:text-[#f5989d]">BLOG</li>
                            <hr/>
                            <li onClick={()=>handleNav('/elements')} className="cursor-pointer relative text-black hover:text-[#f5989d]">ELEMENTS</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-16 sm:pt-20 px-4 sm:px-5 overflow-y-auto">
                <button onClick={()=>{setSearchOpen(false);setSearchQuery("")}} className="absolute top-4 right-4 sm:top-6 sm:right-8 text-2xl text-[#a6a4a4] hover:text-black transition-colors font-work-sans">
                    &#x2715;
                </button>
                <div className="w-full max-w-2xl">
                    <div className="border-b-2 border-[#f5989d] pb-2 mb-8">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            autoFocus
                            className="w-full font-cormorant-uni text-2xl sm:text-3xl md:text-4xl outline-none placeholder-gray-300 text-black"
                        />
                    </div>
                    {searchQuery.trim().length > 0 && (
                        <div className="flex flex-col gap-3 sm:gap-4 pb-10">
                            {searchResults.length === 0 ? (
                                <p className="font-work-sans text-[#a6a4a4] text-sm">No products found for "{searchQuery}"</p>
                            ) : (
                                searchResults.map((p) => (
                                    <div key={p.SKU} onClick={()=>{navigate(`/product/${p.SKU}`);setSearchOpen(false);setSearchQuery("")}}
                                        className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 hover:bg-[#f5f5f7] rounded cursor-pointer transition-colors">
                                        <img src={p.image} alt={p.name} className="w-14 h-14 sm:w-16 sm:h-16 object-cover flex-shrink-0" />
                                        <div className="min-w-0">
                                            <div className="font-cormorant-uni text-base sm:text-lg truncate">{p.name}</div>
                                            <div className="font-work-sans text-sm text-[#f5989d]">${p.price}.00</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Cart Sidebar */}
        {cartOpen && (
            <>
                <div onClick={()=>setCartOpen(false)} className="fixed inset-0 bg-black/30 z-40"></div>
                <div className="fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-white z-50 shadow-xl flex flex-col">
                    <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
                        <h3 className="font-cormorant-uni text-xl sm:text-2xl">Shopping Cart</h3>
                        <button onClick={()=>setCartOpen(false)} className="text-xl text-[#a6a4a4] hover:text-black transition-colors font-work-sans">
                            &#x2715;
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5">
                            <img src={bag} alt="Empty cart" className="w-12 opacity-30" />
                            <p className="font-work-sans text-[#a6a4a4] text-sm">Your cart is empty</p>
                            <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]">
                                <button onClick={()=>{setCartOpen(false);navigate('/shop')}} className="bg-white hover:bg-[#f5989d] hover:text-white transition-all duration-300 font-work-sans text-xs tracking-widest py-3 px-8">
                                    BROWSE SHOP
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                                <div className="flex flex-col gap-4 sm:gap-5">
                                    {cart.map((item) => (
                                        <div key={item.product.SKU} className="flex gap-3 sm:gap-4">
                                            <img onClick={()=>{navigate(`/product/${item.product.SKU}`);setCartOpen(false)}} src={item.product.image} alt={item.product.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer flex-shrink-0" />
                                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                                <div>
                                                    <div onClick={()=>{navigate(`/product/${item.product.SKU}`);setCartOpen(false)}} className="font-cormorant-uni text-sm sm:text-base cursor-pointer hover:text-[#f5989d] transition-colors truncate">{item.product.name}</div>
                                                    <div className="font-work-sans text-xs sm:text-sm text-[#f5989d]">${item.product.price}.00</div>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="flex items-center border border-gray-200">
                                                        <button onClick={()=>updateQuantity(item.product.SKU, item.quantity - 1)} className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#a6a4a4] hover:text-black text-sm">-</button>
                                                        <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs border-x border-gray-200">{item.quantity}</span>
                                                        <button onClick={()=>updateQuantity(item.product.SKU, item.quantity + 1)} className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#a6a4a4] hover:text-black text-sm">+</button>
                                                    </div>
                                                    <button onClick={()=>removeFromCart(item.product.SKU)} className="text-[#a6a4a4] hover:text-[#f5989d] text-xs font-work-sans transition-colors">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-gray-100 p-4 sm:p-5">
                                <div className="flex justify-between items-center mb-4 sm:mb-5">
                                    <span className="font-cormorant-uni text-lg">Subtotal</span>
                                    <span className="font-work-sans text-lg text-[#f5989d]">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="bg-gradient-to-tl from-[#f5989d] via-[#cae2cd] to-[#f5989d] p-[1.9px]">
                                    <button onClick={()=>{setCartOpen(false);navigate('/shop')}} className="bg-white hover:bg-[#f5989d] hover:text-white transition-all duration-300 font-work-sans text-xs tracking-widest py-4 w-full">
                                        VIEW CART
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </>
        )}
        </>
    )
}
