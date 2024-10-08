import { Suspense, lazy } from "react";
//Custom Components
import Header from "./Header";
const Cards = lazy(()=>import("./design/Cards"));
import Section from "./Section";
//Design Components
import Reveal from "./design/Reveal";
//Imports
import { reviews } from "../constants";
import { grid, teamPhoto } from "../assets";


const Reviews = () => {
  return (
    <Section id="reviews">
      <img src={grid} alt="Grid" className="absolute inset-0 w-full h-screen" width={800} height={800}/>

      <div className="container relative">
        <Header />

        <Reveal width="w-[100%]">
        <div className="flex flex-col items-center mt-[2rem] gap-5">
          <h1 className="h1 uppercase mb-[2rem] border-b border-n-14 text-center">Success Stories</h1>
          <img src={teamPhoto} alt="Instagram Post" className="xxs:hidden rounded-2xl"/>
          <Suspense fallback={<div>Loading...</div>}>
            <Cards slides={reviews}/>
          </Suspense>
          <div className="max-w-[500px] mt-5 translate-y-5 bg-n-6/80 rounded-2xl">
            <p className="body-1 text-center p-3">Visit our official <a href="https://www.instagram.com/_barbellfitness/" target="_blank" className="text-n-14 hover:underline">Instagram</a> page and meet our community of champions to learn more about their success stories in health and fitness!</p>
          </div>       
        </div>
        </Reveal>
        
      </div>     
    </Section>
  )
}

export default Reviews;