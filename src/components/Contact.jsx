//Custom Components
import Section from "./Section";
//Design Components
//Imports
import { copyIcon } from "../assets";
import { contactInfo } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {

    //Destructure
    const {address, hours, phone, email} = contactInfo;

    //Functions
    const handleCopy = () => {
        //Here, we are using the Clipboard API and using "writeText" to write into the OS Clipboard by passing the string to copy as an argument
        navigator.clipboard.writeText(address);
    }

  return (
    <Section id="contact">

        <div className="relative px-10">
            <div className="bg-google-image opacity-85 transition-opacity hover:opacity-100 bg-cover h-[15rem] sm:h-[20rem] lg:h-[25rem] 2xl:h-[32rem] rounded-md"/>

            <div className="flex flex-col items-start md:flex-row md:justify-between body-1 gap-5">
                <div className="flex flex-col items-start gap-2 text-n-1 mt-5">
                    <h2 className="font-extrabold mb-2 border-b border-n-14">Address</h2>
                    <div className="flex gap-3">
                        <p className="text-n-1/80">{address}</p>
                        <img src={copyIcon} alt="Copy Icon" className="w-[15px] h-[15px] translate-y-1 bg-n-1 rounded-md cursor-pointer" onClick={handleCopy}/>
                    </div>
                    <p className="text-n-1/80">{hours.weekdays}</p>
                    <p className="text-n-1/80">{hours.weekends}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-n-1 mt-4">
                    <h2 className=" font-extrabold mb-2 border-b border-n-14">Contact</h2>
                    <p className=" text-n-1/80">{email}</p>
                    <p className=" text-n-1/80">{phone}</p>
                    
                </div>
            </div>
            
            
        </div>
    </Section>
  )
}

export default Contact;