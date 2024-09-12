//Custom Components
import Section from "./Section";
//Design Components
import ChangeWord from "./design/ChangeWord";
//Imports
import { testimonies } from "../constants";

const Testimonies = () => {
  return (
    <Section id="testimonies" className="mt-[5rem] bg-n-14">
        <div className="container relative">

          {/* <h1 className="h1 text-center uppercase">Success Stories</h1> */}
          <ChangeWord className="text-center uppercase">
            Stories
          </ChangeWord>
            <div className="flex justify-between flex-wrap gap-15 mt-10">
              {testimonies.map((item)=>{
                return(
                  <iframe key={item.id} src={item.url} width="500" height="265" style={{border:"none", overflow:"hidden", borderRadius: "10px"}}  frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                  className={`pointer-events-none max-w-full ${item.styles ? item.styles : ""}`}/>
                )
              })}
            </div>

        </div>
    </Section>
  )
}

export default Testimonies