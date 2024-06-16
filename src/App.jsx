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


function App() {

  return (
    <>
      <div className="overflow-x-hidden">

        <Hero></Hero>
        <Section2 />
        <Section4 />
        <Carousel />
        <Image />
        <News />
        <LastCarousel />
        <ContactUs />
        <ContactUs2 />
        <Footer />

      </div>
    </>
  )
}

export default App
