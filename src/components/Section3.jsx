import Product from "./product";
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpeg"
import p3 from "../assets/p3.jpeg"
import p4 from "../assets/p4.jpeg"
import p5 from "../assets/p5.jpeg"
import p6 from "../assets/p6.jpeg"
import p7 from "../assets/p7.jpeg"
import p8 from "../assets/p8.jpeg"


export default function Section3(){


    const products=[{name:"Green Scarf",price:48,image:p1},{name:"Pink Top",price:70,image:p2},{name:"Golden Shoe",price:48,image:p3},{name:"Modern Table",price:98,image:p4},{name:"Slim Waller",price:58,image:p5},{name:"Gloves With Pearls",price:99,image:p6},{name:"Empress Earings",price:129,image:p7},{name:"Print Blazer",price:48,image:p8}]
   

    return (
     
        <div className=" flex pl-5 pr-5 md:pl-10 md:pr-10 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-5 w-full ">
            {products.map((item)=>(
                 <Product key={item.name} name={item.name} price={item.price} image={item.image}/>
                
            ))}
           
        
           
        </div>
        
        </div>
   
    )
}