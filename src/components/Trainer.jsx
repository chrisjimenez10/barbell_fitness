import Section from "./Section";
import { trainerPhoto, grid, trainerPhoto2 } from "../assets";
import { trainerBio } from "../constants";

const Trainer = () => {
  return (
    <Section id="trainer">
      <img src={grid} alt="Grid" className="absolute inset-0 w-full" width={550} height={550}/>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">

            {/* Wrap Image in div/container element and give "mx-auto" to center image horizontally and "max-w-fit" to maintain aspect ratio across screen sizes */}
            <div className="relative mx-auto max-w-fit flex flex-col items-center gap-5 animate-fadeIn">
                <h1 className="h1 uppercase bg-n-14/80 rounded-md p-3">Alex Jimenez</h1>
                <div className="relative group">
                  <img src={trainerPhoto2} alt="Trainer" className="overflow-hidden px-5 transition-opacity duration-slow group-hover:opacity-0" width={600} height={500}/>
                  <img src={trainerPhoto} alt="Trainer" className="overflow-hidden absolute inset-0 px-5 opacity-0 transition-opacity duration-slow group-hover:opacity-100" width={600} height={500}/>
                </div>
            </div>
            <div className="md:col-span-1 lg:pr-10 mx-auto max-w-lg flex flex-col gap-2 animate-fadeIn">
                <h2 className="h2 text-center uppercase ">About Me</h2>
                <div className="bg-n-14/80 rounded-md p-5 mx-5">
                  <p className="body-2 text-left">{trainerBio}</p>                                 
                </div>               
            </div>

        </div>
    </Section>
  )
}

export default Trainer;