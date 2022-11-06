import React from "react";
import { Typography } from "@mui/material";
import one from "../../images/places/1.jpg";
import two from "../../images/places/2.jpg";
import three from "../../images/places/3.jpg";
import four from "../../images/places/4.jpg";
import five from "../../images/places/5.jpg";
import six from "../../images/places/6.jpg";
import seven from "../../images/places/7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import useMeasure from "../../utils/ResizeObserver";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";

const images = [one, two, three, four, five, six, seven];

function Memories() {
  const [bind, { width }] = useMeasure();
  return (
    <div
      className="gallery__container"
      data-aos="fade-up"
      data-aos-delay={50}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
    >
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>Popular</span> places
        </Typography>
        <Typography variant="p" component={"p"}>
          Our target is to provide you with a best quality service.
        </Typography>
      </div>
      <div className="swiperContainer" {...bind}>
        <Swiper
          className="swiperSlide"
          slidesPerView={
            width >= 992 ? 3 : 1 && width >= 768 ? 2 : 1
          }
          modules={[Navigation, EffectFade]}
          spaceBetween={10}
          navigation={true}
        >
          {images.map((image, i) => {
            return (
              <SwiperSlide key={i} className="image__container">
                <img
                  src={image}
                  alt={`{${i} -image}`}
                  style={{ cursor: "pointer" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Memories;
