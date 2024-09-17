//Custom Components
import Section from "./Section";
import { useRef } from "react";
import { deadliftVideo } from "../assets";
//Design Components
import Reveal from "./design/Reveal";

const Hero = () => {

  const videoRef = useRef(null);
  
  return (
    <Section 
    id="hero"
    className="-mt-[5.25rem]"
    customPaddings="pt-[3rem]"
    >
        <div className="container relative">

          <div className="mt-12">
            <Reveal width="w-[100%]">
            <div className="z-2 absolute top-[6rem] mt-6 uppercase font-extrabold ">
              <h1 className="hero-heading text-n-14">Prepare<br/>To Change<br/><span className="text-n-1">For the Better.</span></h1>
            </div>
            </Reveal>                      
            <video className="h-full w-full md:block opacity-50" ref={videoRef} src={deadliftVideo} type="video/mp4" autoPlay muted loop playsInline/>            
          </div>
                                      
        </div>
    </Section>
  )
}

export default Hero;