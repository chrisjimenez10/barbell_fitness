//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";
//Design Components
import ChangeWord from "./design/ChangeWord";
import Arrow from "./design/Arrow";
//Imports
import { testimonies } from "../constants";
import { words } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Testimonies = () => {

  //Parallax Ref
  const parallaxref = useRef(null);

  return (
    <Section id="testimonies" className="mt-[5rem] bg-n-14">
        <div className="container relative">
         
          <ChangeWord className="text-center uppercase" words={words}><span className="border-b-2 border-n-8">Stories</span></ChangeWord>

          {/* UP to xl screen size it's a carousel */}
          <Carousel slides={testimonies} slidesPerView className="xl:hidden translate-y-10"/>

          <div className="flex flex-col items-center">
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

            <Link to="/success-stories">
              <div className="flex translate-y-10 hover:underline decoration-n-8">            
                <h6 className="h6 uppercase">Learn <span style={{color: "#0E0C15"}}>More</span></h6>             
                <Arrow />
              </div>
            </Link>
          </div>
             
        </div>
    </Section>
  )
}

export default Testimonies;