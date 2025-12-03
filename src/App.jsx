import {useEffect } from 'react'
import './App.css'
import TopOfHomePAge from './Pages/TopOfHomePAge'
import Img from './Pages/Img'
import Events from './Pages/Events'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import PixelatedImg from './Pages/PixelatedImg'
import { NoiseBackground } from './components/ui/noise-background'

function App() {
  useEffect(() => {
    AOS.init({
      // Optional settings, e.g.:
      duration: 1000, // Animation duration
      once: true,    // Whether animation should happen only once - while scrolling down
    });
    AOS.refresh(); // Recalculate positions of elements
  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <>
    
    <NoiseBackground containerClassName=""
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}   style={{ overflow: 'visible' }}>
    <div className='w-full h-full p-2 bg-[#f2ccc3]'> 
    {/* <div className='w-full h-full p-4 bg-[#ffc414]'>    <TopOfHomePAge/> */}

    <TopOfHomePAge/>
    {/* <PixelatedImg/> */}
    <Img/>
    <Events/>
    </div>
    </NoiseBackground>
    </>
  )
}

export default App
