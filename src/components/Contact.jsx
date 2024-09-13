//Custom Components
import Section from "./Section";
//Design Components
//Imports
import { contactInfo } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {

    //Destructure
    const {address, hours, phone, email, url} = contactInfo;

    //Functions
    const handleCopy = () => {
        //Here, we are using the Clipboard API and using "writeText" to write into the OS Clipboard by passing the string to copy as an argument
        navigator.clipboard.writeText(address);
    }

  return (
    <Section id="contact">

        <div className="relative px-10">
            <a href={url} target="_blank">
                <div className="bg-google-image opacity-85 transition-opacity hover:opacity-100 bg-cover h-[15rem] sm:h-[20rem] lg:h-[25rem] 2xl:h-[32rem] rounded-md"/>
            </a>
            

            <div className="flex flex-col items-start md:flex-row md:justify-between body-1 gap-5">
                <div className="flex flex-col items-start gap-2 text-n-1 mt-5">
                    <h2 className="font-extrabold mb-2 border-b border-n-14">Address</h2>               
                    <p className="text-n-1/80">{address} <span onClick={handleCopy} className="cursor-pointer">📋</span></p>
                    <p className="text-n-1/80">{hours.weekdays}</p>
                    <p className="text-n-1/80">{hours.weekends.substring(0,7)}<span className="text-n-14">{hours.weekends.substring(7,15)}</span></p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-n-1 mt-4">
                    <h2 className="font-extrabold mb-2 border-b border-n-14">Contact</h2>
                    <p className="text-n-1/80">{email}</p>
                    <p className="text-n-1/80">{phone}</p>
                    <Link to="/message">                   
                        <p className="text-n-1/80 transition-colors hover:text-n-14">Send Message 📧</p>                                                                         
                    </Link>
                </div>
            </div>
            
            
        </div>
    </Section>
  )
}

export default Contact;