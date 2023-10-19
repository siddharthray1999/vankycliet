import React from "react";
import "./Password.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import treeexchcom from "../../Assets/Images/treeexchcom.png";
import MobileMenuBar from "../../Components/MobileMenuBar/MobileMenuBar";
const Password = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="password-main">
        <img src={treeexchcom} alt="" className="tree-img" />
        <div>
          <input
            type="password"
            placeholder="Old Password"
            className="oldpass-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="New Password"
            className="Newpass-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Retype Password"
            className="retypepass-input"
          />
        </div>
        <div>
          <button className="pass-submit">Submit</button>
        </div>
      </div>

      <MobileMenuBar/>
    </div>
  );
};

export default Password;
