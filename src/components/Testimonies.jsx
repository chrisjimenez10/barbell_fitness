//Custom Components
import Section from "./Section";
//Design Components
import ChangeWord from "./design/ChangeWord";
//Imports
import { testimonies } from "../constants";
import { words } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Testimonies = () => {

  const parallaxref = useRef(null);

  return (
    <Section id="testimonies" className="mt-[5rem] bg-n-14">
        <div className="container relative">

          <ChangeWord className="text-center uppercase" words={words}><span className="border-b-2 border-n-8">Stories</span></ChangeWord>
          {/* UP to xl screen size it's a carousel */}
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