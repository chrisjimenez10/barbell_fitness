import { useState } from "react";
import { companyLogo } from "../assets";

const Header = () => {

  //State
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-neutral-800 lg:backdrop-blur-sm`}>
      <div className="flex items-center py-4 px-5 lg:px-8 xl:px-10">

        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={companyLogo} width={80} height={40} alt="Barbell Logo" className="rounded-full"/>
        </a>

        <nav>
          
        </nav>

      </div>
    </div>
  )
}

export default Header