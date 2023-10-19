import React from "react";
import "./Rightbar.css";
import Accordion from "react-bootstrap/Accordion";
const RightBar = () => {
  return (
    <div className="rightbar-main">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Mini Games</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RightBar;
