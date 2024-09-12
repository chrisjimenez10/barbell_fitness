//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";
//Imports
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services" className="mt-[5rem]">
      <div className="container relative">
          <h1 className="h1 text-center uppercase mb-[3rem] bg-n-14 py-2 rounded-2xl"><span style={{color: "#0E0C15"}}>S</span>ervices</h1>
          <Carousel slides={services} bgGradient/>
      </div>
    </Section>
  )
}

export default Services;