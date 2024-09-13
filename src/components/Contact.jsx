//Custom Components
import Section from "./Section";
//Design Components
//Imports
import { copyIcon } from "../assets";
import { contactInfo } from "../constants";

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
            <div className="bg-google-image bg-cover h-[15rem] sm:h-[20rem] lg:h-[25rem] 2xl:h-[32rem] rounded-md"/>

            <div className="flex justify-between">
                <div className="flex flex-col gap-2 text-n-1 mt-5">
                    <h4 className="h4 font-extrabold mb-5">Address</h4>
                    <div className="flex gap-3">
                        <h6 className="h6 text-n-1/80">{address}</h6>
                        <img src={copyIcon} alt="Copy Icon" className="w-[24px] h-[24px] translate-y-1 bg-n-1 rounded-md cursor-pointer" onClick={handleCopy}/>
                    </div>
                    <h6 className="h6 text-n-1/80">{hours.weekdays}</h6>
                    <h6 className="h6 text-n-1/80">{hours.weekends}</h6>
                </div>
                <div className="flex flex-col gap-2 text-n-1 mt-5">
                    <h4 className="h4 font-extrabold mb-5">Contact</h4>
                    <h6 className="h6 text-n-1/80">{email}</h6>
                    <h6 className="h6 text-n-1/80">{phone}</h6>
                </div>
            </div>
            
            
        </div>
    </Section>
  )
}

export default Contact;