import Section from "./Section";
import { trainerPhoto } from "../assets";
import { trainerBio } from "../constants";

const Trainer = () => {
  return (
    <Section id="trainer">
        <div className="flex flex-col items-center justify-center gap-5 md:grid md:grid-cols-3 md:grid-rows-1">

            {/* Wrap Image in div/container element and give "mx-auto" to center image horizontally and "max-w-fit" to maintain aspect ratio across screen sizes */}
            <div className="relative mx-auto max-w-fit flex flex-col items-center md:col-span-2 gap-5 animate-fadeIn">
                <h1 className="h1">Alex Jimenez</h1>
                <img src={trainerPhoto} alt="Trainer" className="overflow-hidden px-5" width={600} height={500}/>
            </div>
            <div className="md:col-span-1 lg:pr-10 mx-auto md:max-w-sm lg:max-w-lg">
                <h1 className="h1 text-center">Bio</h1>               
                  <p className="body-2 text-left px-5">{trainerBio}</p>                
            </div>

        </div>
    </Section>
  )
}

export default Trainer