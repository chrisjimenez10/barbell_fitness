import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import { companyLogo } from "../assets";
import { navigation } from "../constants";
import { useNavigate } from "react-router-dom";
//Custom Components
import Button from "./Button";
//Design Components
import MenuSvg from "./design/MenuSvg";
import { HamburgerMenu } from "./design/HamburgerBackground";
import ButtonGradient from "./design/ButtonGradient";


const Header = () => {

  //Navigate
  const navigate = useNavigate();

  //State
  const [openNavigation, setOpenNavigation] = useState(false);

  //Text color styling with URL
  const pathname = useLocation();

  //Functions
  const toggleNavigation = () => {
    if(openNavigation){
      setOpenNavigation(false);
      enablePageScroll();
    }else{
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if(!openNavigation){
      navigate("/");
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
    navigate("/");
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center py-4 px-5 xl:px-12">

        <a href="#hero" className="flex w-[12rem] xl:mr-8 gap-5" onClick={()=> navigate("/")}>
          <img src={companyLogo} width={60} height={20} alt="Barbell Logo" className="rounded-full"/>
          <h1 className="text-[1.5rem] relative top-4 font-bold">Barbell&nbsp;Fitness</h1>
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item)=>{
              return(
                <a key={item.id} onClick={handleClick} href={item.url} className={`block relative mx-20 md:mx-10 font-code text-2xl uppercase text-n-1 transition-colors hover:text-n-14 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}>
                  {item.title}
                </a>
              )
            })}
          </div>

          {/* This is the Component that displays the background when user opens Hamburger Menu by clicking on the hamburger icon */}
          <HamburgerMenu />
        </nav>

        {/* NOTE: If owner wants to add additional buttons/links, this is the place to add */}

        {/* This is the Hamburger Icon Button to open Hamburger Menu */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </Button>

      </div>
      <ButtonGradient openNavigation={openNavigation}/>
    </div>
  )
}

export default Header