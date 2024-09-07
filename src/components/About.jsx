import Section from "./Section";
import { companyLogo } from "../assets";

const About = () => {
  return (
    <Section
    id="about"
    className="bg-n-14 "
    >
        <div className="container relative">
           
            <div className="text-center pt-5 z-2">
                <h1 className="text-[1.5rem] sm:h1 uppercase font-extrabold text-n-1 text-shadow-1">Make Healthier Choices</h1>
                <p className="body-2 text-n-1/90 pt-5">Guiding people to a stronger, leaner body. Creating good habits and healthy relationship with their favorite foods! Earning the body they work for and deserve</p>
            </div>

        <div className="absolute top-0 left-2 -translate-y-9 z-1 opacity-10">
          <img src={companyLogo} alt="Barbell Logo"/>
        </div>

        </div>

    </Section>
  )
}

export default About