//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";
import Button from "./Button";
//Imports
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services" className="mt-[5rem]">
      <div className="container relative">
          <h1 className="h1 text-center uppercase mb-[3rem] bg-n-14 py-2 rounded-2xl"><span style={{color: "#0E0C15"}}>S</span>ervices</h1>
          <Carousel slides={services} bgGradient/>

          <div className="flex flex-col items-center gap-5 translate-y-15">
            <h6 className="h6 text-center text-n-1 italic"><span className="text-n-14"><a href="/#contact">Call Now</a></span> Or <span className="text-n-14"><a href="/#contact">Send Message</a></span> To Sign Up!</h6>
            {/* Button to redirect to Component with Details on Services */}
            <Button white>Learn More</Button>
          </div>  

      </div>
    </Section>
  )
}

export default Services;