//Imports
import { useState, useEffect } from "react";
import { words } from "../../constants";

const ChangeWord = ({children, className}) => {
    //The children prop are the CONSTANT words
    //The jack prop is the word that will alternate

    //State
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [animate, setAnimate] = useState(false);

    //Functions
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            //Here, we store the index value of the currentWord so we can increase value in the next operation
            const currentIndex = (words.indexOf(currentWord));
            //Here, we are using what is called "circular indexing"/"wrap-around indexing" where the index value cyclesback to the start of the array when it reaches the END (AVOIDS out-of-bounds error) --> The math logic is that the remainder of dividing by the length of the array is the NEXT index value
            const nextIndex = (currentIndex + 1) % words.length;
            setCurrentWord(words[nextIndex]);
            setAnimate(true); //Here, we trigger the animation by updating the state for the animation
        }, 7000);
        return ()=> clearInterval(intervalId); //Closes the setInteval()
    }, [currentWord]);

    useEffect(()=>{
        if(animate){
            //Here, we are using querySelectors to ADD the class for fading animation (.animate-fadeIn-2) to the wordToChange
            const wordToChange = document.querySelector("#wordToChange");
            wordToChange.classList.add("animate-fadeIn-2");
            //Here, we use the setTimeout() function to reset the starting point so we can trigger the animation again
            setTimeout(()=>{
                wordToChange.classList.remove("animate-fadeIn-2");
                setAnimate(false);
            }, 3000); //NOTE: Important to match the animation time in the CSS (index.css) with the time argument in the setTimeout()
        }
    },[animate]);

  return (
    <h1 className={`h1 font-extrabold ${className || ""}`}>
        <span id="wordToChange" className={`text-n-8 `}>{currentWord}</span> {children}
    </h1>
  )
}

export default ChangeWord;