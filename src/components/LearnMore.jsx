import Section from "./Section";
import GradientLight from "./design/GradientLight";
import { healthyLinks } from "../constants";

const LearnMore = () => {
  return (
    <Section id="learnmore">
        <div className="container relative z-2">
            <div className="flex flex-wrap gap-10 mb-10">
                {healthyLinks.map((item)=>{
                    return(
                        <div key={item.id} className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" style={{backgroundImage: `url(${item.backgroundUrl}`}} >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.description}</p>
                            </div>

                        {item.light && <GradientLight />}

                        </div>

                    )
                })}
            </div>

        </div>

    </Section>
  )
}

export default LearnMore