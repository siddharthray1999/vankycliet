import React from "react";
import "./Casino.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import andarbahar from "../..//Assets/Images/anderbahar.jpg";
import anthony from "../../Assets/Images/anthony.jpg";
import teen from "../../Assets/Images/teen.jpg";
import teen20 from "../../Assets/Images/teen20.jpg";
import card32 from "../../Assets/Images/card32.jpg";
import lucky7 from "../../Assets/Images/lucky7.jpg";
import dt20 from "../../Assets/Images/dt20.jpg";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import MobileMenuBar from "../../Components/MobileMenuBar/MobileMenuBar";
const Casino = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="live-casino-nav">
        <div className="live-casino">Live Casino</div>
        <div>
          <Link to="/">
            <button className="live-casino-btn">Back</button>
          </Link>
        </div>
      </div>
      <div className="casino-game-card">
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={andarbahar} />
            <Card.Body>
              <Card.Title>Ander Bahar</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={teen} />
            <Card.Body>
              <Card.Title>Teen Patti 1Day</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={teen20} />
            <Card.Body>
              <Card.Title>Teen Patti T20</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={card32} />
            <Card.Body>
              <Card.Title>32Card A</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={lucky7} />
            <Card.Body>
              <Card.Title>Lucky 7A</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={dt20} />
            <Card.Body>
              <Card.Title>Dragon Tiger T20</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/CasinoAddPage">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={anthony} />
            <Card.Body>
              <Card.Title>Ander Bahar</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
      <MobileMenuBar />
    </div>
  );
};

export default Casino;
