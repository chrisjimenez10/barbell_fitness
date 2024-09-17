//Imports
import { useRef, useEffect } from "react";
  //Here, we are using EmailJS service to send client-side emails --> NOTE: emailjs has three methods and we are using sendForm() --> We can also use send(), but we need to pass the individual Template Parameters that match what we have in our Template at the EmailJS Website as a JSON Object (both key-values wrapped in quotes)
import emailjs from "@emailjs/browser";

const Message = () => {

  //We can pass the "ref" attribute to our <form> element, so we escape the need to have to update and store input values through state --> This will interact directly with the DOM and all the input values will be stored within the variable we assign the "ref" attribute to, so for us the "form" variable --> We can then use the sendForm() method of emailjs and pass the Template Parameters via "form.current"
  const form = useRef();
  const phoneInput = useRef();

  useEffect(()=>{
    const inputElement = phoneInput.current;
    inputElement.addEventListener("input", (e)=>{
      //Regext Pattern for phone_number input field
      const regex = /^[0-9]*$/; //Accept ONLY Digits 0-9
      if(!regex.test(e.target.value)){
        //Here, we are slicing the value that is provided by the user that DOES NOT pass the regex.test() --> The input is a string, so the index position -1 refers to the LAST/MOST RECENTLY APPENDED element of the string 
        e.target.value = e.target.value.slice(0, -1);
      }
    })
  },[])

  //Functions
  const sendEmail = async (e) => {
    e.preventDefault();
    if(!form.current) return; //Check for null

    try{
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      });
    }catch(error){
      console.error("Error sending email:", error);
    }
  };


  return (
    <>
    
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>

        <label htmlFor="user_name">Full Name: </label>
        <input id="user_name" name="user_name" type="text" required/>

        <label htmlFor="user_email">Email: </label>
        <input id="user_email" name="user_email" type="email" required/>

        <label htmlFor="phone_number">Phone Number: </label>
        <input id="phone_number" name="phone_number" type="tel" ref={phoneInput}/>

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" required/>

        <input type="submit" value="Send" />

      </form>
   
    </>
    
  )
}

export default Message;