//Custom Components
import Section from "./Section";
//Design Components
import Reveal from "./design/Reveal";
//Imports
import { trainerPhoto, grid, trainerPhoto2 } from "../assets";
import { trainerBio, certificationIcons } from "../constants";

const Trainer = () => {
  return (
    <Section id="trainer" className="mt-[5rem]">
      <Reveal width="w-[100%]" right>
      <img src={grid} alt="Grid" className="absolute inset-0 w-full" width={550} height={550}/>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">

            {/* Wrap Image in div/container element and give "mx-auto" to center image horizontally and "max-w-fit" to maintain aspect ratio across screen sizes */}
            <div className="relative mx-auto max-w-fit flex flex-col items-center gap-5">
                <h1 className="h1 uppercase bg-n-14/80 rounded-md p-3"><span style={{color: "#0E0C15"}}>A</span>lex <span style={{color: "#0E0C15"}}>J</span>imenez</h1>
                {/* We can apply hover effect on sibling elements by providing the group class to the parent, then we can reference each sibling element with group-... to ensure proper hiding/show effect */}
                <div className="relative group">
                  <img src={trainerPhoto2} alt="Trainer" className="overflow-hidden px-5 transition-opacity duration-slow group-hover:opacity-0" width={600} height={500}/>
                  <img src={trainerPhoto} alt="Trainer" className="overflow-hidden absolute inset-0 px-5 opacity-0 transition-opacity duration-slow group-hover:opacity-100" width={600} height={500}/>
                </div>
            </div>
            <div className="md:col-span-1 lg:pr-10 mx-auto max-w-lg flex flex-col gap-2">
                <h2 className="h2 text-center uppercase ">About Me</h2>
                <div className="bg-n-14/80 rounded-md p-5 mx-5">
                  <p className="body-2 text-left">{trainerBio}</p>                                 
                </div>
                <div className="flex flex-wrap gap-5 items-center justify-center translate-y-15">
                  {certificationIcons.map((item)=>{
                    return(
                      <a href={item.url} target="_blank" key={item.id}>
                        <div className="bg-n-6 rounded-full transition-transform hover:bg-n-5 hover:-translate-y-3">
                          <img src={item.image} alt="Certification Icons" className="rounded-full p-2 opacity-80 transition-opacity hover:opacity-100 w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]"/>
                        </div>
                      </a>                     
                    )
                  })}
                </div>                            
            </div>

        </div>
      </Reveal>
    </Section>
  )
}

export default Trainer;