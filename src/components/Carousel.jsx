//Imports
    // Swiper.js Library (https://swiperjs.com/react#installation)
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Carousel = ({slides}) => {

    //The slides prop MUST be an array of objects with the following fields: id, title, image

  return (
    <>
        <Swiper
            // The spaceBetween prop is used to assign the distance between each slide
            spaceBetween={50}
            // The slidesPerView prop is used to assign how many slides are visible at a time
            slidesPerView={1}
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
                            <div className="bg-conic-gradient2 rounded-2xl">
                                <img src={item.image} alt={item.image} className="p-1 rounded-2xl"/>
                            </div>
                            <h4 className="h4 mt-3 uppercase">{item.title}</h4>
                        </div>                     
                    </SwiperSlide>
                )
            })}
            <div className="swiper-pagination"></div>
        </Swiper>
        
        {/* Arrows DO NOT work yet */}
        <div id="swiper-button-prev" className="swiper-button-prev text-n-14 hidden lg:block" />
        <div id="swiper-button-next" className="swiper-button-next text-n-14 hidden lg:block"/>
         
    </>
  )
}

export default Carousel