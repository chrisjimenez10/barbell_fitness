//Custom Components
import Section from "./Section";
//Design Components
//Imports
import { copyIcon } from "../assets";
import { contactInfo } from "../constants";

const Contact = () => {

    //Destructure
    const {address, hours, phone} = contactInfo;

    //Functions
    const handleCopy = () => {
        //Here, we are using the Clipboard API and using "writeText" to write into the OS Clipboard by passing the string to copy as an argument
        navigator.clipboard.writeText(address);
    }

  return (
    <Section id="contact">
        <div className="bg-google-image bg-cover h-[15rem] sm:h-[20rem] lg:h-[25rem] 2xl:h-[30rem]"/>

        <div className="container relative">

            <div className="flex flex-col gap-3 text-n-1">
                <div className="flex gap-3">
                    <h6 className="h6">{address}</h6>
                    <img src={copyIcon} alt="Copy Icon" className="w-[24px] h-[24px] translate-y-1 bg-n-1 rounded-md cursor-pointer" onClick={handleCopy}/>
                </div>
                <h6 className="h6">{hours.weekdays}</h6>
                <h6 className="h6">{hours.weekends}</h6>
                <h6 className="h6">{phone}</h6>
            </div>
            
        </div>
    </Section>
  )
}

export default Contact;