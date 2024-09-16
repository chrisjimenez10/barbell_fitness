//Custom Components
import Header from "./Header";
//Imports
import { reviews } from "../constants";

const Reviews = () => {
  return (
    <div className="relative">
        <Header />
        <h1 className="h1 mt-[5rem] text-center uppercase mb-[2rem]">Success Stories</h1>

        <div className="flex flex-col gap-5 bg-conic-gradient2">
          {reviews.map((item, index)=>{
            return (
              <div key={index} className="rounded-2xl">
                <img src={item} alt="Review" className="w-full h-full p-1 rounded-2xl"/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Reviews;