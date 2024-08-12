import { useContext } from "react"
import { ProductContext } from "./ContextProduct"



export default function SinglePrdocut(){
    const {loading,product} =useContext(ProductContext);
    
        if(loading){
            return<div>
                loading...
            </div>
        }

    return(
        <>
    
        </>
    )
}