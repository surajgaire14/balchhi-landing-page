import React from "react";
import image from "../images/balchhi-icon.jpg";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";
import PhoneLineIcon from "remixicon-react/PhoneLineIcon";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const notify = () => toast("Number Copied",{theme:"dark"});

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
        <button
          onClick={notify}
          style={{ background: "transparent", color: "#fff", border: "none" }}
        >
          <i
            // data-tip="985-7074022"
            data-tip = "click here to copy phone number"
            onClick={() => {
              navigator.clipboard.writeText("9804409022");
            }}
          >
            <PhoneLineIcon /> 
          </i>
        </button>
        <p style={{color:"#fff"}}>9804409022</p> 
        <ReactTooltip />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Navbar;
