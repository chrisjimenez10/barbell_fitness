//Dynamic Routing
import { Link } from "react-router-dom";
// Custom Components
import Section from "./Section";
import Button from "./Button";
//Design Components
import GradientLight from "./design/GradientLight";


const Error = () => {
  return (
    <Section
    id="error"
    >
    
        <div className="flex flex-col items-center h-[40rem]">
          <h1 className="text-[10rem] font-extrabold">404</h1>
          <p className="text-n-1/80 mt-[5rem]">Page Not Found</p>
          <Link to="/">
            <Button white className="mt-[3rem]">Home</Button>
          </Link>
        </div>

        <GradientLight/>
       
    </Section>
  )
}

export default Error