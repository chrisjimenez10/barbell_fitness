//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// This is the component for Card Effect using Swiper API
const Cards = ({slides}) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        //We can add the "custom-pagination" class to our Swiper Instance and then create a UNIQUE .swiper-pagination style in our index.css for ONLY the Swiper Instance with this class
        className="myCards custom-pagination"
      >
        {slides.map((item, index)=>{
          return(
            <SwiperSlide>
              <img key={index} src={item} className="object-cover rounded-2xl"/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Cards;