import React from "react";
import { Typography } from "@mui/material";
import "./style.css";

const Contact = () => {
  return (
    <div
      className="contact__container"
      id="Contact"
      data-aos="fade-up"
      data-aos-delay={50}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
    >
      <div className="about">
        <Typography variant="h2" component={"h2"}>
          Contact <span style={{ color: "orangered" }}> Us</span>
        </Typography>
        <Typography>
          Balchhi is easy to find so visitors can get quickly in touch with
          us.Contact us and make most of your eating background with us.
        </Typography>
      </div>
      <div className="location__container">
        <div className="contact">
          <div className="grid__item">
            <i className="ri-map-pin-line"></i>
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              Address:
            </Typography>
            <Typography>Tilottama -5 ,Manigram</Typography>
          </div>
          <div className="grid__item">
            <i className="ri-phone-line"></i>
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              Call us:
            </Typography>
            <Typography>9804409022</Typography>
          </div>
          <div className="grid__item">
            <i className="ri-mail-line"></i>
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              Email:
            </Typography>
            <Typography>balchhiresort@gmail.com</Typography>
          </div>
          <div className="grid__item">
            <i className="ri-links-line"></i>
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              Connect us at:
            </Typography>
            <div className="icons">
              <a href="https://www.facebook.com/Balchhireosrt/">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/balchhiresort/">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://web.whatsapp.com/">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Blachi on Google Map"
            width="500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.016934147103!2d83.47514371506024!3d27.623992182826473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685151b893a11%3A0x17e1d6499ce964!2sBalchhi%20Resort%20And%20Agro%20Farm%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1655878480303!5m2!1sen!2snp"
            height="335"
            style={{ border: "1px solid grey", borderRadius: "5px" }}
            loading="lazy"
            className="balchhi__map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
