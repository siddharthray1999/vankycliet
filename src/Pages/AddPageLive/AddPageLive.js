import React from "react";
import "./AddPageLive.css";
import { CgProfile } from "react-icons/cg";
const AddPageLive = () => {
  return (
    <>
      <div className="home-navbar">
        <div>
          <span>HOME</span>
        </div>
        <div>
          <span>pts:250000.0</span>
          <span>
            <CgProfile style={{ fontSize: "30px" }} />
            <span>c1150</span>
          </span>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </>
  );
};

export default AddPageLive;
