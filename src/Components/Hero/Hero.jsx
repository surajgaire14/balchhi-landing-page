import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import hero from "../../images/hero1.jpg";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import "./style.css";

const Hero = ({ ref }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="hero__container" ref={ref}>
      <div className="about">
        <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
        <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>

        <Typography className="greeting" variant="p" component={"p"}>
          Welcome to balchhi,
        </Typography>
        <Typography variant="h1" component={"h1"}>
          Enjoy Your Vacation <br /> &amp; Remember Trips!
        </Typography>
        <Typography component={"p"} variant="p">
          We connect like a family with best food.
        </Typography>

        <button onClick={handleClick}>
          <PlayCircleIcon className="icon" style={{ color: "orangered" }} />
          <Typography> Watch Video</Typography>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-video"
        >
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/cNRm9y6wQ9U"
              // width={` ${window.innerWidth > 0 && window.innerWidth <426 ? "410px" : "760px"}`}
              // height={"800px"}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="iframe"
              id="modal-modal-video"
              frameborder="0"
              title="Welcome to Balchhi"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>

      <div className="image">
        <img src={hero} alt="balchhi" />
      </div>
    </div>
  );
};

export default Hero;
