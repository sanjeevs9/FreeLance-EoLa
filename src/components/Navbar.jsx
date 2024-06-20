import user from "../assets/user.png"
import bag from "../assets/shopping-bag.png"
import search from "../assets/search.png"
import bar from "../assets/burger-bar.png"
import { useEffect, useState } from "react"



export default function Navbar(){
    const [drop,setDrop]=useState(false);

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

    return(
        <>
        <div className="flex justify-between  font-work-sans text-[13px] relative">
            <div className="bg-white">
                <img className="object-cover- w-16" src="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/logo-divided-1.png"/>
            </div>
            <div className="flex justify-between gap-10 pt-4 pr-2  ">
                <div className="hidden lg:flex">
                    <ul className="flex justify-between gap-10 pt-1">
                        <li className="cursor-pointer underline underline-offset-4">HOME
                        </li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">PAGES</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">STORE</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">SHOP</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">LOOKBOOK</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">BLOG</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-5 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-5 after:right-[50%]">ELEMENTS</li>
                    </ul>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300">
                    <img src={user} className="object-cover w-5" ></img>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300">
                    <img src={search}  className="object-cover w-5"></img>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[1px] hover:scale-110 duration-300">
                    <img src={bag} className="object-cover w-5"></img>
                </div>
                <div className="lg:hidden cursor-pointer transition ease-in-out delay-100  hover:scale-110  -translate-y-1/4 " onClick={()=>{setDrop(!drop)}}>
                    <img className="object-cover w-10" src={bar}></img>
                </div>
                {drop && (
                        <div className="absolute top-12 right-0 bg-white  w-60 rounded-sm">
                            <ul className="gap-3 flex flex-col pl-5 pr-5 pt-3">
                            <li className="cursor-pointer text-[#f5989d] ">HOME
                        </li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d]">PAGES</li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d]">STORE</li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d]">SHOP</li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d]">LOOKBOOK</li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d]">BLOG</li>
                        <hr/>
                        <li className="cursor-pointer relative text-black hover:text-[#f5989d] mb-2">ELEMENTS</li>
                            </ul>
                        </div>
                    )}
            </div>
        </div>
        </>
    )
}