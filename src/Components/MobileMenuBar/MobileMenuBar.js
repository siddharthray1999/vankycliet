import React from "react";
import "./MobileMenuBar.css";
import editstate from "../../Assets/Images/editstake.png";
import inplay from "../../Assets/Images/inplay.png";
import logout from "../../Assets/Images/logout.png";
import bethistory from "../../Assets/Images/bethistory.png";
import home from "../../Assets/Images/home.png";
const MobileMenuBar = () => {
  return (
    <div className="mobile-main">
      <div className="mobile-menu">
        <div className="icon-menu">
          <img src={inplay} alt="" />
          <span>Acc</span>
        </div>
        <div className="icon-menu">
          <img src={editstate} alt="" />
          <span>Total</span>
        </div>
        <div className="home-icon">
          <img src={home} alt="" className="home-image" />
        </div>
        <div className="icon-menu">
          <img src={bethistory} alt="" />
          <span>P&L</span>
        </div>
        <div className="icon-menu">
          <img src={logout} alt="" />
          <span>Casino</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
