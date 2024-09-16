//Custom Components
import Header from "./Header";
import Cards from "./design/Cards";
import Section from "./Section";
//Imports
import { reviews } from "../constants";


const Reviews = () => {
  return (
    <Section id="reviews">
      <div className="container relative">
        <Header />
        <div className="flex flex-col items-center mt-[2rem]">
          <h1 className="h1 uppercase mb-[2rem] border-b border-n-14">Success Stories</h1>
          <Cards slides={reviews}/>
        </div>
   
      </div>
       
        
    </Section>
  )
}

export default Reviews;