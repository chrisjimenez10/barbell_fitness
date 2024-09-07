import Section from "./Section";
import { companyLogo, barbellIcon, dumbellsIcon, plateIcon, benchpressIcon } from "../assets";
import { MouseParallax } from "react-just-parallax";
import { useRef } from "react";


const About = () => {

    //Parallax
    const parallaxRef = useRef(null);

  return (
    <Section
    id="about"
    className="bg-n-14 "
    >
        <div className="container relative" ref={parallaxRef}>
           
            <div className="text-center pt-5 z-10">
                <h1 className="text-[1.5rem] sm:h1 uppercase font-extrabold text-n-1">Make Healthier Choices</h1>
                <p className="body-2 text-n-1/90 pt-5">Guiding people to a stronger, leaner body. Creating good habits and healthy relationship with their favorite foods! Earning the body they work for and deserve</p>
            </div>

        <div className="absolute top-0 left-2 2xl:left-0 w-full h-full -translate-y-9 z-2 opacity-10">
            <img src={companyLogo} alt="Barbell Logo"/>
        </div>

        <MouseParallax isAbsolutelyPositioned>
            <div className="hidden pointer-events-none lg:block z-1">
                <img src={barbellIcon} alt="Barbell Icon" width={100} height={80} className="absolute right-[7rem] translate-y-[7rem]"/>
                <img src={dumbellsIcon} alt="Dumbell Icon" width={80} height={80} className="absolute left-0 -translate-y-10"/>
                <img src={plateIcon} alt="Plate Icon" width={80} height={80} className="absolute left-[5rem] translate-y-[7rem]"/>
                <img src={benchpressIcon} alt="BenchPress Icon" width={100} height={80} className="absolute right-[2rem] -translate-y-10"/>
            </div> 
        </MouseParallax>
     

        </div>

    </Section>
  )
}

export default About