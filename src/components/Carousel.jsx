//Imports
    // Swiper.js Library (https://swiperjs.com/react#installation)
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";


const Carousel = ({slides, className, slidesPerView, bgGradient}) => {

    //The slides prop MUST be an array of objects with the following fields: id, title, image


    //State
    const [slidesView, setSlidesView] = useState(1);
        //Here, we are using the window object and innerWidth property to capture the CURRENT width screen size
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Functions
    useEffect(()=>{
    const handleResize = () => {
        setWindowWidth(window.innerWidth); //Here, we UPDATE the windowWidth state with the current inner width by capturing that value (which is a number representing pixels)
    };
    //Here, we are attaching an event listener to the "resize" event and executing the logic inside handleResize function --> This will triger the handleResize funciton every time the screen is resized
    window.addEventListener("resize", handleResize);
    //Here, we are using a "cleanup" arro function that removes the event listener when the component unmounts --> This prevents memory leak and ensures event listener is NOT called unnecessarily
    return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    useEffect(()=>{
    //Here, we set the numerical value (representing pixels) that will change slides per view based on state of windowWidth (screen size)
    if(windowWidth >= 768){
        setSlidesView(2);
    }else{
        setSlidesView(1);
    }
    },[windowWidth]);


  return (
    <div className={`${className || ""}`}>
        <Swiper
            // The spaceBetween prop is used to assign the distance between each slide
            spaceBetween={50}
            // The slidesPerView prop is used to assign how many slides are visible at a time
            slidesPerView={slidesPerView ? slidesView : 1}
            // We use the loop + speed props to continously slide through all the slides
            loop={true}
            speed={10000}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
                // We want the autoplay to start instantly, so we set delay to zero
                delay: 0,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            //The pagination prop displays and activates the bulets indicating slides
            pagination={{
                clickable: true,
            }}
        >
            {slides.map((item)=>{
                return(
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center">
                            <div className={`${bgGradient ? "bg-conic-gradient2" : ""} rounded-2xl`}>
                                {item.image && (
                                    <img src={item.image} alt="Slide Image" className="p-1 rounded-2xl"/>
                                )}
                                {item.url && (
                                    <iframe key={item.id} src={item.url} width="800" height="265" style={{border:"none", overflow:"hidden", borderRadius: "10px"}}  frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                                    className={`pointer-events-none max-w-full ${item.styles ? item.styles : ""}`}/>
                                )}
                            </div>
                            {item.title && (
                                <h4 className="h4 mt-3 uppercase">{item.title}</h4>
                            )}
                        </div>                     
                    </SwiperSlide>
                )
            })}
            <div className="swiper-pagination"></div>
        </Swiper>
        
        {/* Arrows DO NOT work yet */}
        <div id="swiper-button-prev" className="swiper-button-prev text-n-14 hidden lg:block" />
        <div id="swiper-button-next" className="swiper-button-next text-n-14 hidden lg:block"/>
         
    </div>
  )
}

export default Carousel