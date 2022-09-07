import React from "react";
import {
  BreakfastDining,
  LocalParking,
  WorkOutline,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import PhishingIcon from "@mui/icons-material/Phishing";
import "./style.css";

const icons = [
  { name: "Free Wifi", icon: <i className="ri-wifi-fill icon"></i> },
  { name: "Breakfast", icon: <BreakfastDining className="icon" /> },
  { name: "Parking", icon: <LocalParking className="icon" /> },
  { name: "Working Space", icon: <WorkOutline className="icon" /> },
  {
    name: "24hr electricity",
    icon: <i className="fa-solid fa-bolt-lightning icon"></i>,
  },
  {
    name: "Fishing",
    icon: <PhishingIcon className="icon" fontSize="2rem" />,
  },
  { name: "Dinner", icon: <i className="fa-solid fa-utensils icon"></i> },
  { name: "Others", icon: <i className="ri-more-2-fill icon"></i> },
];

const Facilities = () => {
  return (
    <div
      className="facilities__container"
      id="Facilities"
      data-aos="fade-up"
      data-aos-delay={50}
      data-aos-duration={1500}
      data-aos-easing="ease-in-out"
    >
      <div className="about">
        <Typography variant="h2" component={"h2"}>
          Our <span className="span">Facilities</span> for you
        </Typography>
        <Typography>
          Balchhi is equipped with number of facilities such as Bar,Kitchen and
          peaceful place to hangout.We have soothing sound and lighting system
          and provides private dining to spend with your loved ones.
        </Typography>
        <button>Contact Now</button>
      </div>
      <div className="facilities">
        {icons.map(({ name, icon }, i) => {
          return (
            <div key={i}>
              {icon}
              <Typography>{name}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
