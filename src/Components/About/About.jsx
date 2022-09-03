import React from "react";
import about from "../../images/about.jpg";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./style.css";

export default function About() {
  return (
    <div className="about_container" id="About Us">
      <div className="image" data-aos={"fade-right"}>
        <img src={about} alt="balchhi_image" />
      </div>
      <div
        className="content"
        data-aos="fade-left"
        data-aos-delay={50}
        data-aos-duration={1000}
        data-aos-easing="ease-in-out"
      >
        <div className="title">
          <Typography component={"h1"} variant="h1">
            <b>About</b>
            <span>
              {" "}
              <b>Us</b>
            </span>
          </Typography>
        </div>
        <Typography component="p" variant="p">
          Prakash Kharal and Bijay Neupane together opened the balchhi in 2019 AD in manigram.It is
          well known with a substantial gathering of people including
          families,kids and customers arriving in daily basis.
        </Typography>
        <Typography component="p" variant="p">
          In case if you are searching for top notch food and peacful place to
          hangout then balchhi is one of the top spot in manigram.
        </Typography>
        <Typography component={"p"} variant="p">
          Enjoy our dazzling dishes and make the most of your eating background
          with us!
        </Typography>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
