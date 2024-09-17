//Imports
import { useRef } from "react";
  //Here, we are using EmailJS service to send client-side emails --> NOTE: emailjs has three methods and we are using sendForm() --> We can also use send(), but we need to pass the individual Template Parameters that match what we have in our Template at the EmailJS Website as a JSON Object (both key-values wrapped in quotes)
import emailjs from "@emailjs/browser";

const Message = () => {

  //We can pass the "ref" attribute to our <form> element, so we escape the need to have to update and store input values through state --> This will interact directly with the DOM and all the input values will be stored within the variable we assign the "ref" attribute to, so for us the "form" variable --> We can then use the sendForm() method of emailjs and pass the Template Parameters via "form.current"
  const form = useRef();

  //Functions
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm("service_c5j2uhf", "template_g9ftjqm", form.current, {
      publicKey: "IuG3Dwb1SMJ2tutmX",
    });
  };


  return (
    <>
    
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>

        <label htmlFor="user_name">Full Name: </label>
        <input id="user_name" name="user_name" type="text" required/>

        <label htmlFor="user_email">Email: </label>
        <input id="user_email" name="user_email" type="email" required/>

        <label htmlFor="phone_number">Phone Number: </label>
        <input id="phone_number" name="phone_number" type="text"/>

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" required/>

        <input type="submit" value="Send" />

      </form>
   
    </>
    
  )
}

export default Message;