import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ContextProduct"
import { useParams } from "react-router-dom";
import axios from "axios";



export default function SinglePrdocut(){
    const {loading,product} =useContext(ProductContext);
    const {id} =useParams();
    
    
        if(loading){
            return<div>
                loading...
            </div>
        }
        useEffect(()=>{
             function fetchProduct(){
               const data=product.filter((x)=>x.SKU===id)
               return data;
            }
            console.log(fetchProduct());
        },[])

    return(
        <>
        <div>{id}</div>
        </>
    )
}