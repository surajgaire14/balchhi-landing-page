import React from "react";
import { Typography } from "@mui/material";
import one from "../../images/memories/1.jpg";
import two from "../../images/memories/2.jpg";
import three from "../../images/memories/3.jpg";
import four from "../../images/memories/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";

const images = [one, two, three, four];

function Memories() {
  // const [hovered,setHovered] = React.useState(false)
  return (
    <div className="gallery__container">
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>Memories</span>
        </Typography>
        <Typography variant="p" component={"p"}>
          Create some beautiful memories at balchhi
        </Typography>
      </div>
      <div className="swiperContainer">
        <Swiper
          className="swiperSlide"
          slidesPerView={
            window.innerWidth >= 992 ? 3 : 1 && window.innerWidth >= 768 ? 2 : 1
          }
          modules={[Navigation, EffectFade]}
          spaceBetween = {10}
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
