import Section from "./Section";
import { trainerPhoto } from "../assets";
import { trainerBio } from "../constants";

const Trainer = () => {
  return (
    <Section id="trainer">
        <div className="flex flex-col items-center justify-center gap-5 md:grid grid-cols-3 grid-rows-1">

            {/* Wrap Image in div/container element and give "mx-auto" to center image horizontally and "max-w-fit" to maintain aspect ratio across screen sizes */}
            <div className="relative mx-auto max-w-fit md:col-span-2 flex flex-col items-center">
                <h1 className="h1 animate-fadeIn">Alex Jimenez</h1>
                <img src={trainerPhoto} alt="Trainer" className="overflow-hidden border border-n-14 animate-fadeIn" width={600} height={500}/>
            </div>
            <div className="md:col-span-1 text-center outline-dotted">
                <h1 className="h1">Bio</h1>
                <p>{trainerBio}</p>
            </div>

        </div>
    </Section>
  )
}

export default Trainer