//Custom Components
import Section from "./Section";
import { useRef } from "react";
import { deadliftVideo } from "../assets";

const Hero = () => {

  const videoRef = useRef(null);
  
  return (
    <Section 
    id="hero"
    className="pt-[12rem] -mt-[5.25rem]"
    customPaddings="pt-[3rem]"
    >
        <div className="container relative">

          <div className="mt-12">
            <div className=" z-2 absolute top-[6rem] mt-10 uppercase font-extrabold text-[2rem] sm:text-[3rem] sm:mt-[4.8rem] sm:leading-[3.5rem] leading-10 md:text-[4rem] md:leading-[4.5rem] md:mt-[5.3rem] lg:text-[5rem] lg:mt-[9.8rem] lg:leading-[5.5rem] xl:text-[6rem] xl:mt-[16.5rem] xl:leading-[6.5rem] 2xl:text-[7rem] 2xl:leading-[7.8rem] 2xl:mt-[15rem]">
              <h1 className="text-n-14">Prepare<br/>To Change<br/><span className="text-n-1">For the Better.</span></h1>
            </div>                       
            <video className="h-full w-full md:block opacity-50" ref={videoRef} src={deadliftVideo} type="video/mp4" autoPlay muted loop/>            
          </div>
                                      
        </div>
    </Section>
  )
}

export default Hero;