import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({children, width}) => {

    //Creating a ref to for node creation and access of element (no need to depend on re-rendering of component)
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); //We assign the ref to the useInView() Hook and pass two parameters: 1.The "ref", 2.Object with property "once" and boolean value (if we want to only trigger animation ONCE, we set to true --> Otherwise, the effect will keep firing when we scroll)

    //Here, we can use the useAnmiation() hook to create animation controlers that can moutn, set, start, stop an animation --> Then we can use the controller to access those methods and pass the "variant" tag we assigned as properties to the varaints prop to the motion.div
    const mainControls = useAnimation();

    //Here, we are writing the animation logic inside useEffect() hook to trigger when value of isInView changes (when the component comes into view in the viewport)
    useEffect(()=>{
        if(isInView){
            //Fire the animation
            mainControls.start("visible")
        }
    },[isInView]);

  return (
    <div ref={ref} className={`relative ${width}`}>
        <motion.div
            variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x:0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 2, delay: 0.25
            }}
        >{children}</motion.div>
    </div>
  )
}

export default Reveal;