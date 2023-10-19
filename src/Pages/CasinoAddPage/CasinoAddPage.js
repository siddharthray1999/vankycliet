import React from "react";
import "./CasinoAddPage.css";
import Card from "react-bootstrap/Card";
import andarbahar from "../..//Assets/Images/anderbahar.jpg";
import anthony from "../../Assets/Images/anthony.jpg";
import teen from "../../Assets/Images/teen.jpg";
import teen20 from "../../Assets/Images/teen20.jpg";
import card32 from "../../Assets/Images/card32.jpg";
import lucky7 from "../../Assets/Images/lucky7.jpg";
import dt20 from "../../Assets/Images/dt20.jpg";
const CasinoAddPage = () => {
  return (
    <div className="casino-add-page">
      <div className="rolex-div">
        <div className="name-rolex">rolex12</div>
        <div className="rolex-pts">
          Pts: <span>25000.00</span>
        </div>
      </div>
      <div className="casino-type">
        <div className="casino-hub">Casino Hub</div>
        <div className="old-diamond">old Diamond</div>
      </div>
      <div className="casino-add-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={andarbahar} />
          <Card.Body>
            <Card.Title>ODB20</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={teen} />
          <Card.Body>
            <Card.Title>OD1DAY</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={teen20} />
          <Card.Body>
            <Card.Title>ODT20</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card32} />
          <Card.Body>
            <Card.Title>OD32CARD</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lucky7} />
          <Card.Body>
            <Card.Title>ODLUCKY7</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dt20} />
          <Card.Body>
            <Card.Title>ODdt20</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={anthony} />
          <Card.Body>
            <Card.Title>ODAAA</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CasinoAddPage;
