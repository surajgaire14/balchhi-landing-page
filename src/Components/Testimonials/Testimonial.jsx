import React from "react";
import DoubleQuotesLIcon from "remixicon-react/DoubleQuotesLIcon";
import DoubleQuotesRIcon from "remixicon-react/DoubleQuotesRIcon";
import { Typography } from "@mui/material";
import "./style.css"

function Testimonial({ name, image, review, rating }) {
  return (
    <div className="testimonial">
      <div className="about">
        <img src={image} alt={`${name}`} />
        <Typography variant="h3" component={"h3"}>
          {name}
        </Typography>
        {rating}
      </div>
      <Typography variant="p" component={"p"}>
        <i className="icon">
          <DoubleQuotesLIcon />
        </i>
        {review}
        <i className="icon">
          <DoubleQuotesRIcon />
        </i>
      </Typography>
    </div>
  );
}

export default Testimonial;
