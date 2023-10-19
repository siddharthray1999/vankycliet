import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import ronaldo from "../../Assets/Images/ronaldo.jpg";
import congrats from "../../Assets/Images/congrats.jpg";
import casino from "../../Assets/Images/casino.jpg";
import livescore from "../../Assets/Images/livescore.png";
import blackcard from "../../Assets/Images/blackcard.png";
import Games from "../Games/Games";

const Slider = () => {
  return (
    <>
      <div className="slider-main-div">
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img src={ronaldo} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={congrats} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={casino} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={livescore} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={blackcard} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
        <Games />
      </div>
    </>
  );
};

export default Slider;
