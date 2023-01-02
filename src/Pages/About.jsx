import React from "react";
import bhinaju from "../images/bhinaju.jpg";
import bijayDai from "../images/bijayneupanedai.jpg";
import "./style.css";
import one from "../images/memories/1.jpg";
import two from "../images/memories/2.jpg";
import three from "../images/memories/3.jpg";
import four from "../images/memories/4.jpg";
import place1 from "../images/places/1.jpg";
import place2 from "../images/places/2.jpg";
import place3 from "../images/places/3.jpg";
import place4 from "../images/places/4.jpg";
import place5 from "../images/places/5.jpg";
import place6 from "../images/places/6.jpg";
import place7 from "../images/places/7.jpg";

const images = [
  one,
  two,
  three,
  four,
  place1,
  place2,
  place3,
  place4,
  place5,
  place6,
  place7,
];

const owners = [
  {
    name: "Prakash kharal",
    image: bhinaju,
    post: "Owner",
    testimonial:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimusdolor culpa quo cupiditate totam fugiat? Dolores deserunt id autofficia.",
  },
  {
    name: "Bijay Neupane",
    image: bijayDai,
    post: "Manager",
    testimonial:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimusdolor culpa quo cupiditate totam fugiat? Dolores deserunt id autofficia.",
  },
];

const About = () => {

  return (
    <>
      <main id="about__page">
        <div className="content">
          <h2>Providing the best service in town</h2>
          <p>
            Balchhi was discovered in around 2017 AD and it is located in
            manigram,Tilottama Municipality and has won heart of many families
            and youth of the locality.It is discoved with the motto of providing
            best and quality service in the town. It has the facility of fine
            dining,peaceful environment for work spaces,boat safari around the
            lake and provides BBQ facilities at night.
          </p>
        </div>
        <div className="about__image">
          <img src={bhinaju} alt="balchhi__owner" />
        </div>
      </main>
      <h3 className="text">Word from our owners</h3>
      <div className="owner-testimonial">
        {owners.map((owner, i) => {
          return (
            <div className="about-testimonial" key={i}>
              <div className="about">
                <img src={owner.image} alt="owner_of_balchhi" />
                <div>
                  <h4>{owner.name}</h4>
                  <p>{owner.post}</p>
                </div>
              </div>
              <div className="quote">
                <i className="ri-double-quotes-l"></i>
              </div>
              <div className="about-content">
                <p>{owner.testimonial}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="images-container">
        <h3 className="life">Life at balchhi</h3>
        <div className="images-gallery">
          {images.map((image) => {
            return <img src={image} alt="balchhi__images" key={image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default About;
