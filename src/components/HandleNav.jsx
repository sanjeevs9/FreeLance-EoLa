import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar";


export default function HandleNav(){
    const location=useLocation();
    const[hide,sethide]=useState(true);

    useEffect(()=>{
        console.log(location);
        location.pathname=="/"?sethide(true):sethide(false)

    },[location])

    return (
        <>
    <div className={`${hide?"hidden":'block  w-full '}`}>
        <Navbar className={`items-center pl-5 pr-5`}/>
    </div>
        </>
    )
}