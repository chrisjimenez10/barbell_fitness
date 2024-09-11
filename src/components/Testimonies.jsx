//Custom Components
import Section from "./Section";
import Carousel from "./Carousel";

const Testimonies = () => {
  return (
    <Section id="testimonies" className="mt-[5rem]">
        <div className="container relative">
            <h1 className="text-center">Testimonies</h1>
            <Carousel />
        </div>
    </Section>
  )
}

export default Testimonies