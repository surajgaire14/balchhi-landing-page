import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import "../App.css"
import Memories from "../Components/Memories/Memories";
import Facilities from "../Components/Facilities/Facilities";
import About from "../Components/About/About";
import { Typography } from "@mui/material";
import Testimonials from "../Components/Testimonials/Testimonials";
import Gallery from "../Components/Gallery/Gallery";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Aos from "aos";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const HeroRef = React.useRef();
  const MemoriesRef = React.useRef();
  const FacilitiesRef = React.useRef();
  const AboutRef = React.useRef();
  const TestimonialsRef = React.useRef();
  const GalleryRef = React.useRef();
  const ContactRef = React.useRef();

  const refs = {
    HeroRef,
    MemoriesRef,
    FacilitiesRef,
    AboutRef,
    TestimonialsRef,
    GalleryRef,
    ContactRef,
  };

  return (
    <>
      <Navbar refs={refs} />
      <main style={{ width: "100vw" }} id="main">
        <div style={{ width: "80%", margin: "auto" }}>
          <Hero ref={HeroRef} />
          <Memories ref={MemoriesRef} />
          <Facilities ref={FacilitiesRef} />
          <About ref={AboutRef} />
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
          <Testimonials ref={TestimonialsRef} />
          <Gallery ref={GalleryRef} />
          <Contact ref={ContactRef} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
