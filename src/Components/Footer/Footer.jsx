import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const links = [
  { name: "Home", link: ["Booking", "Facilities", "Location", "Service"] },
  { name: "About us", link: ["FAQ", "Company", "Statistic"] },
  { name: "Help", link: ["How it Work", "Desk Help"] },
];

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (link) => {
    if (link === "Location") {
      console.log("clicked");
      navigate("www.google.com");
    }
  };

  const notify = () => toast("Number Copied", { theme: "dark" });

  return (
    <div className="footer__container">
      <div className="footer">
        <div className="content__container">
          <div className="about">
            <Typography variant="h3" component={"h3"}>
              Balchhi Resort
            </Typography>
            <Typography>
              This is a resort where you get a lots of extra choice &
              comfortable memorable tour.
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
              <button
                onClick={() => notify()}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <i
                  data-tip="click here to copy phone number"
                  onClick={() => {
                    navigator.clipboard.writeText("071591015");
                  }}
                  className="ri-phone-fill"
                ></i>
              </button>
              <p style={{ color: "#fff" }}>071591015</p>
              <ReactTooltip />
              <ToastContainer position="bottom-right" autoClose={2000} />
            </div>
          </div>
          <div className="content">
            {links.map(({ name, link }, i) => {
              return (
                <div key={i}>
                  <Typography variant="h5" component={"h5"}>
                    {name}
                  </Typography>
                  <div>
                    <div className="links">
                      {link.map((link, i) => {
                        return (
                          <Typography
                            component={"a"}
                            variant={"a"}
                            key={i}
                            style={{ cursor: "pointer", color: "#fff" }}
                            onClick={() => handleClick(link)}
                          >
                            {link}
                          </Typography>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="copyright">
          <Typography style={{ textAlign: "center", margin: "10px 0" }}>
            Copyright © 2022 Balchhi. All Right Reserved.
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            Made with ♥ byThe Boring School
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
