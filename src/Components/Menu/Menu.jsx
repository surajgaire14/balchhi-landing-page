import React from "react";
import { Typography } from "@mui/material";
import one from "../../images/menus/one.jpg"
import two from "../../images/menus/two.jpg";
import three from "../../images/menus/three.jpg";
import four from "../../images/menus/four.jpg";
import five from "../../images/menus/five.jpg";
import six from "../../images/menus/six.jpg";
import seven from "../../images/menus/seven.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import useMeasure from "../../utils/ResizeObserver";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";

const images = [one, two, three, four, five, six, seven];

function Menu() {
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
          Our <span style={{ color: "orangered" }}>Menu</span> 
        </Typography>
        <Typography variant="p" component={"p"}>
          Our target is to provide you with a best food available in the town.
        </Typography>
      </div>
      <div className="menuSwiperContainer" {...bind}>
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

export default Menu;
