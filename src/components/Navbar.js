import React from "react";
import image from "../images/balchhi-icon.jpg";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";

const Navbar = () => {
  return (
    <div className="navBar">
      <a href="/" className="image">
        <img src={image} alt="balchhi" />
      </a>
      <div className="icons">
        <a
          href="https://www.facebook.com/Balchhireosrt"
          target={"_blank"}
          rel="noreferrer"
        >
          <i>
            <FacebookBoxFillIcon />
          </i>
        </a>
        <a
          href="https://www.instagram.com/balchhiresort/"
          target={"_blank"}
          rel="noreferrer"
        >
          <i>
            <InstagramFillIcon />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
