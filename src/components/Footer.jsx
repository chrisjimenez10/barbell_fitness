//Custom Components
import Section from "./Section";
//Imports
import { companyName } from "../constants";

const Footer = () => {
  return (
    <Section id="footer" className="">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-4 lg:block">© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
    </Section>
  )
}

export default Footer;