import React from "react";
import "./Homepage.css";
import Slider from "../Slider/Slider";
import RightBar from "../RightBar/RightBar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MobileMenuBar from "../MobileMenuBar/MobileMenuBar";

const Homepage = () => {
  return (
    <>
      <div className="main-body">
        <LeftSidebar />

        <Slider />

        <RightBar />
      </div>
      <MobileMenuBar />
    </>
  );
};

export default Homepage;
