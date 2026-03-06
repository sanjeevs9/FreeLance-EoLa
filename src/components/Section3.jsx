import Product from "./product";
import { useContext } from "react";
import { ProductContext } from "./ContextProduct";


export default function Section3(){
    const {loading,product}=useContext(ProductContext);
   if(loading){
    return <div className="flex justify-center items-center py-16 font-work-sans text-[#a6a4a4]">Loading....</div>
   }

    return (
        <div className="flex px-3 sm:px-5 md:px-10 pt-10 sm:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-5 w-full">
                {product.map((item)=>(
                     <Product key={item.name} name={item.name} price={item.price} image={item.image} id={item.SKU}/>
                ))}
            </div>
        </div>
    )
}
