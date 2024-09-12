//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";
//Design Components
import ChangeWord from "./design/ChangeWord";
//Imports
import { testimonies } from "../constants";
import { words } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState, useEffect } from "react";

const Testimonies = () => {

  //Parallax Ref
  const parallaxref = useRef(null);

  //State
  const [slidesView, setSlidesView] = useState(1);
    //Here, we are using the window object and innerWidth property to capture the CURRENT width screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Functions
  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <Section id="testimonies" className="mt-[5rem] bg-n-14">
        <div className="container relative">

          <ChangeWord className="text-center uppercase" words={words}><span className="border-b-2 border-n-8">Stories</span></ChangeWord>
          {/* UP to xl screen size it's a carousel */}

          <Carousel slides={testimonies} slidesPerView={slidesView} className={`md:${()=> setSlidesView(2)} xl:hidden`}/>

          <ScrollParallax>
            <div className="hidden xl:flex justify-between flex-wrap gap-15 translate-y-[4rem]" ref={parallaxref}>
                {testimonies.map((item)=>{
                  return(
                    <iframe key={item.id} src={item.url} width="500" height="265" style={{border:"none", overflow:"hidden", borderRadius: "10px"}}  frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    className={`pointer-events-none max-w-full ${item.styles ? item.styles : ""}`}/>
                  )
                })}
              </div>
          </ScrollParallax>

        </div>
    </Section>
  )
}

export default Testimonies;