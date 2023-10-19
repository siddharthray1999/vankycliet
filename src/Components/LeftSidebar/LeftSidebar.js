import React from "react";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-side-bar">
      <div className="sport-left">Sports</div>
      <div className="play-left">In-play</div>
      <div className="cricket-left">Cricket</div>
      <div className="tennis-left">Tennis</div>
      <div className="soccer-left">Soccer</div>
    </div>
  );
};

export default LeftSidebar;
