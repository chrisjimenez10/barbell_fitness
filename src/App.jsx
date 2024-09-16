//Custom Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LearnMore from "./components/LearnMore";
import Error from "./components/Error";
import Trainer from "./components/Trainer";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
//Design Components
import ButtonGradient from "./components/design/ButtonGradient";
//Dynamic Routing
import {Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <>

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
          <Route path="*" element={<Error />} />
        </Routes>

      </div>
     
      <ButtonGradient />
    </>
  )
}

export default App
