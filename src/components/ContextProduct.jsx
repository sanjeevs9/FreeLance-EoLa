import {  createContext, useEffect, useState } from "react"
import axios from "axios";

export const ProductContext=createContext([]);

export default function ContextProduct({children}){
    const [product,setproduct]=useState();
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        async function getDetails(){
            await axios.get("/product.json")
            .then(res=>{
                setproduct(res.data);
                setloading(false);
            }).catch(err=>{
                console.log("error");
            })
        }
        getDetails();
    },[])

    return (
        <>
        <ProductContext.Provider value={{product,loading}}>
                {children}
        </ProductContext.Provider>
        
        </>
    )
}