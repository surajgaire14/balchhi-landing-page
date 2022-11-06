import React from "react";
import gaire from "../../images/gaire.jpg";
import riwaj from "../../images/riwaj.jpg";
import laxman from "../../images/laxman.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@mui/material";
import Testimonial from "./Testimonial";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import useMeasure from "../../utils/ResizeObserver";

const Persons = [
  {
    name: "Suraj Gaire",
    img: gaire,
    rating: <Rating value={4} readOnly />,
    review:
      "It was a great experience staying at balchhi,it felt like a home and the service was top notch.",
  },
  {
    name: "Riwaj Neupane",
    img: riwaj,
    rating: <Rating value={5} readOnly />,
    review:
      "Thank you so much for providing best quality of services available in the town.",
  },
  {
    name: "Laxman Rai",
    img: laxman,
    rating: <Rating value={4} readOnly />,
    review:
      "It is a place to visit once in your lifetime.I have listened my friend recommendation and glad i did.",
  },
];

function Testimonials() {
  const [bind] = useMeasure();
  return (
    <div
      style={{ width: "100%", marginTop: "50px" }}
      data-aos="fade-up"
      data-aos-delay={50}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
      {...bind}
    >
      <Swiper
        slidesPerView={window.innerWidth > 768 ? 2 : 1}
        spaceBetween={5}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          width: "100%",
        }}
      >
        {Persons.map(({ name, img, review, rating }, i) => {
          return (
            <SwiperSlide key={i}>
              <Testimonial
                name={name}
                image={img}
                rating={rating}
                review={review}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
