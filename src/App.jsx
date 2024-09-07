//Custom Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Error from "./components/Error";
//Design Components
import ButtonGradient from "./components/design/ButtonGradient";

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
          </>} />
          <Route path="*" element={<Error />} />
        </Routes>

      </div>
     
      <ButtonGradient />
    </>
  )
}

export default App
