import { Suspense, lazy } from "react";
//Custom Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";
//Lazy Loading Components - Benefits: 1.Improved Initial Load Time, 2.Better Performance (Load Components only when needed), 3.Reduced Bandwidth Usage (Load components on demand)
const About = lazy(()=>import("./components/About"));
const Trainer = lazy(()=>import("./components/Trainer"));
const Contact = lazy(()=>import("./components/Contact"));
const LearnMore = lazy(()=>import("./components/LearnMore"));
const Reviews = lazy(()=>import("./components/Reviews"));
const Message = lazy(()=>import("./components/Message"));
const Error = lazy(()=>import("./components/Error"));
//Design Components
import ButtonGradient from "./components/design/ButtonGradient";
//Dynamic Routing
import {Routes, Route} from "react-router-dom";


const App = () => {
  return (
   
      <Suspense fallback={<div>Loading...</div>}>
        <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
          <Routes>
            <Route path="/" element={<>
              <Header />
              <Hero />
              <About />
              <Trainer />
              <Services />
              <Testimonies />
              <Contact />
              <Footer />
            </>} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/message" element={<Message />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      
        <ButtonGradient />
      </Suspense>
    
  )
}

export default App;
