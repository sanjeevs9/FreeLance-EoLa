import user from "../assets/user.png"
import bag from "../assets/shopping-bag.png"
import search from "../assets/search.png"



export default function Navbar(){
    return(
        <>
        <div className="flex justify-between  font-work-sans text-[13px]">
            <div className="bg-white">
                <img className="size-fit w-16" src="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/logo-divided-1.png"/>
            </div>
            <div className="flex justify-between gap-10 pt-4 pr-2">
                <div>
                    <ul className="flex justify-between gap-10 pt-1">
                        <li className="cursor-pointer underline underline-offset-4">HOME
                            
                        </li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">PAGES</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">STORE</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">SHOP</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">LOOKBOOK</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">BLOG</li>
                        <li className="cursor-pointer relative text-black   transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">ELEMENTS</li>
                    </ul>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[] hover:scale-110 duration-300">
                    <img src={user} className="size-fit w-5" ></img>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[0.5px] hover:scale-110 duration-300">
                    <img src={search}  className="size-fit w-5"></img>
                </div>
                <div className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-[0.5px] hover:scale-110 duration-300">
                    <img src={bag} className="size-fit w-5"></img>
                </div>
            </div>
        </div>
        </>
    )
}