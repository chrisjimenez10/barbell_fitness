import Section from "./Section";
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services" className="mt-[5rem]">
        <div className="container relative">

          <div className="flex flex-col items-center justify-between gap-16">
            <h1 className="h1 uppercase border-b border-n-14">Services</h1>

            <div className="flex flex-col flex-wrap items-center gap-[10rem] md:flex-row">
              {services.map((item)=>{
                return(
                  <div key={item.id} className="flex flex-col items-center mx-auto max-w-full">
                    <div className="bg-conic-gradient2 rounded-2xl">
                      <img src={item.image} alt="Service Image" width={500} height={500} className="p-1 rounded-2xl"/>
                    </div>
                    <h4 className="h4 py-3 uppercase">{item.title}</h4>
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