import { useState } from "react";
import { companyLogo } from "../assets";

const Header = () => {

  //State
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center py-4 px-5 xl:px-12">

        <a href="#hero" className="flex w-[12rem] xl:mr-8 gap-5">
          <img src={companyLogo} width={60} height={20} alt="Barbell Logo" className="rounded-full"/>
          <h1 className="text-[1.5rem] relative top-4"><nobr>Barbell Fitness</nobr></h1>
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Header