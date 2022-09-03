import React from "react";
import notFoundImage from "../assets/notf.png";
import "./style.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound__container">
      <h2>Sorry,page not found!</h2>
      <p>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>
      <img src={notFoundImage} alt="notFoundImage" />
      <div className="button">
        <Button onClick={() => navigate("/")}>Go To Home</Button>
      </div>
    </div>
  );
}

export default NotFound;
