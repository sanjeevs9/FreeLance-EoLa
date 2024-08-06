import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LastCarousel from "./components/LastCarousel"
import News from "./components/News"
import Section2 from "./components/Section2"
import Section4 from "./components/Section4"
import ContactUs from "./components/ContactUs"
import ContactUs2 from "./components/ContactUs2"
import Image from "./components/Image"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import FAQ from "./components/Pages/FAQ"
import Contact from "./components/Pages/Contact"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import HandleNav from "./components/HandleNav"
import Section3 from "./components/Section3"


function App() {
  const[top,setTop]=useState(true);

  useEffect(()=>{

    async function handle(){
      window.addEventListener("scroll",()=>{
        window.scrollY<=60?setTop(true):setTop(false);
      })
    }
    handle();
  

  })

  return (
    <>
   
   
    
    <BrowserRouter>
    <div className={`${top?`hidden`: `fixed bg-white`}   z-20 top-0 w-full`}>
    <Navbar className={`items-center pl-5 pr-5`}></Navbar>
    </div>
    <HandleNav/>
      <Routes>
        <Route path="/" element={<div className="overflow-x-hidden">
            <Hero></Hero>
            <Section2 />
            <Section3/>
            <Section4 />
            <Carousel />
            <Image />
            <News />
            <LastCarousel />
            <ContactUs />
            <ContactUs2 />
            <Footer />
          </div>}/>
          
          <Route path="/faq" element={<FAQ/>}/>   
          <Route path="/contact" element={<Contact/>}/>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
