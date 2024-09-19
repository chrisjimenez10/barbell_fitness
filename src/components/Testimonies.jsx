//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";
import Button from "./Button";
//Design Components
import ChangeWord from "./design/ChangeWord";
import Reveal from "./design/Reveal";
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
      <Reveal width="w-[100%]" right>
        <div className="container relative">
         
          <ChangeWord className="text-center uppercase" words={words}><span className="border-b-2 border-n-8">Stories</span></ChangeWord>

          {/* UP to xl screen size it's a carousel */}
          <Carousel slides={testimonies} slidesPerView reverse className="xl:hidden translate-y-10"/>

          <div className="flex flex-col items-center">
            <ScrollParallax>
              <div className="hidden xl:flex justify-between flex-wrap gap-15 translate-y-[4rem]" ref={parallaxref}>
                  {testimonies.map((item)=>{
                    return(
                      <img key={item.id} src={item.url}
                      className={`${item.styles ? item.styles : ""} h-[20rem] w-[33rem] rounded-2xl`}/>
                    )
                  })}
              </div>         
            </ScrollParallax>

            <Link to="/reviews">                       
                <Button white className="mt-5 translate-y-5 lg:translate-y-10 xl:translate-y-[4rem] xl:-translate-x-5 2xl:-translate-x-7">See More</Button>           
            </Link>
          </div>
             
        </div>
      </Reveal>
    </Section>
  )
}

export default Testimonies;