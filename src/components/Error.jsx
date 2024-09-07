//Dynamic Routing
import { Link } from "react-router-dom";
// Custom Components
import Section from "./Section";
import Button from "./Button";


const Error = () => {
  return (
    <Section
    id="error"
    >
    
        <div className="flex flex-col items-center">
          <h1 className="text-[10rem] font-extrabold">404</h1>
          <p className="text-n-1/80 mt-[5rem]">Page Not Found</p>
          <Link to="/">
            <Button white className="mt-[3rem]">Home</Button>
          </Link>
        </div>
       
    </Section>
  )
}

export default Error