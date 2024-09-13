//Custom Components
import Section from "./Section";
//Imports
import { companyName, socials, developer } from "../constants";

const Footer = () => {

  //Destructuring
  const { fullName, portfolio } = developer;

  return (
    <Section id="footer" customPaddings="p-2">
        <div className="container flex sm:justify-between lg:flex-col lg:-translate-y-[5rem] justify-center items-center gap-5 max-sm:flex-col">
            <p className="caption text-n-4 lg:block">© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item)=>{
                return(
                  <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                    <img src={item.iconUrl} alt={item.title} width={20} height={20} />
                  </a>
                )
              })}
            </ul>
        </div>

        {/* Developer Signature */}
        <p className="text-[.8rem] text-n-4 text-center mt-[3rem] sm:text-left sm:translate-x-5 md:translate-x-10 lg:text-center lg:-translate-y-[1rem] lg:translate-x-0">
          Website developed by 
          <a href={portfolio} target="_blank" className="underline"> {fullName}</a>
        </p>
    </Section>
  )
}

export default Footer;