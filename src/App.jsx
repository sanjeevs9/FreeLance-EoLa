

import Carousel from "./components/Carousel"
import Hero from "./components/Hero"
import News from "./components/News"
import Section2 from "./components/Section2"
import Section4 from "./components/Section4"


function App() {
 
  return (
    <>
    <div className="overflow-x-hidden">

<Hero></Hero>
<Section2/>
<Section4/>
<Carousel/>
<News/>
</div>
    </>
  )
}

export default App
