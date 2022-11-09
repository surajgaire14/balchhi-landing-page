import Hero from "../Components/Hero/Hero";
import "../App.css";
import Memories from "../Components/Memories/Memories";
import Facilities from "../Components/Facilities/Facilities";
import About from "../Components/About/About";
import { Typography } from "@mui/material";
import Testimonials from "../Components/Testimonials/Testimonials";
import Gallery from "../Components/Gallery/Gallery";
import Contact from "../Components/Contact/Contact";
import Menu from "../Components/Menu/Menu";
import Aos from "aos";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main style={{ width: "100vw" }} id="main">
      <div style={{ width: "80%", margin: "auto" }}>
        <Hero />
        <Memories />
        <Facilities />
        <Menu />
        <About/>
        <Typography
          variant="h2"
          component={"h1"}
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: window.innerWidth <= 425 && "2.5rem",
          }}
        >
          What our <span style={{ color: "orangered" }}>Customer</span> say
        </Typography>
        <Testimonials />
        <Gallery />
        <Contact />
      </div>
    </main>
  );
};

export default  Home;
