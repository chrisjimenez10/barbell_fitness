//Custom Components
import Section from "./Section";
//Design Components

//Imports
import { services } from "../constants";


const Services = () => {
  return (
    <Section id="services" className="mt-[5rem]">
        <div className="container relative">

          <div className="flex flex-col items-center justify-between gap-16">
            <h1 className="h1 uppercase border-b border-n-14">Services</h1>

            <div className="flex flex-col flex-wrap gap-[10rem] md:flex-row">
              {services.map((item)=>{
                return(
                  <div key={item.id} className="mx-auto max-w-fit h-[20rem]">
                    <div className="bg-conic-gradient2 rounded-2xl h-full w-full">
                      <img src={item.image} alt="Service Image" className="p-1 rounded-2xl w-full h-full object-cover"/>
                    </div>
                    <h4 className="h4 py-3 uppercase text-center">{item.title}</h4>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
    </Section>
  )
}

export default Services