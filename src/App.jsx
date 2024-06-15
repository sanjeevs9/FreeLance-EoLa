

import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LastCarousel from "./components/LastCarousel"
import News from "./components/News"
import Section2 from "./components/Section2"
import Section4 from "./components/Section4"
import Map from "./components/Map"
import ContactUs from "./components/ContactUs"


function App() {
 
  return (
    <>
    <div className="overflow-x-hidden">

<Hero></Hero>
<Section2/>
<Section4/>
<Carousel/>
<News/>
<LastCarousel/>
<Footer/>
<ContactUs/>
</div>
    </>
  )
}

export default App
