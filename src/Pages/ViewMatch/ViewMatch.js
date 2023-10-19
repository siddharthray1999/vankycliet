import React, { useState } from "react";
import "./ViewMatch.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { AiOutlineStar } from "react-icons/ai";
import Table from "react-bootstrap/Table";
// import { AiFillInfoCircle } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";
const ViewMatch = () => {
  const [showLive, setShowLive] = useState(false);
  return (
    <div>
      <Navbar />
      <LeftSidebar />

      <div className="main-div">
        <div className="left-div">
          <div className="survey-div">
            <div className="survey">
              <span>
                <AiOutlineStar />
              </span>
              <span> Surrey v Northamptonshire</span>
            </div>

            <div>
              <span className="live-tv" onClick={() => setShowLive(true)}>
                LIVE TV
              </span>
              <span className="matches">MATCHES</span>
            </div>
          </div>

          <div className="matches-iframe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam
            at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat
            tellus diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut.volutpat tellus diam,
            consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
            pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat
            gravida libero rhoncus ut.ulvinar felis blandit. Vestibulum volutpat
            tellus diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam semper diam at erat
            pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
            diam, consequat gravida libero rhoncus ut.volutpat tellus diam,
            consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
            pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat
            gravida libero rhoncus ut.
          </div>
          {showLive && (
            <>
              <div>djfihgdugndfjibgdm djbuhgudbdbvjbvjhb</div>
            </>
          )}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>odds</th>
                <th style={{ background: "#b5e0ff" }}>LAGAI</th>
                <th style={{ background: "#fbb7c5" }}>KHAI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>England</td>
                <td>15.00</td>
                <td>17.00</td>
              </tr>
              <tr>
                <td>Ireland</td>
                <td>15.00</td>
                <td>17.00</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Toss Book</th>
                <th style={{ background: "#b5e0ff" }}>England</th>
                <th style={{ background: "#b5e0ff" }}>Ireland</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WHO WILL WIN THE TOSS</td>
                <td>15.00</td>
                <td>17.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="right-div">
          <div style={{ display: "flex" }}>
            <span className="bet-slip">Bet Slip</span>
            <span className="edit-stake">Edit Stake</span>
          </div>

          <div>
            <div className="state-name">Bangladesh</div>

            <div className="state-profit-loss">
              <span>Yet (Bet For)</span>
              <span>
                <span>Profit</span>
                <span>0</span>
              </span>
              <span>
                <span>Loss</span>
                <span>0</span>
              </span>
            </div>
            <div className="odd-even">
              <span>odd</span>
              <span>even</span>
            </div>
            <div className="choice-betting">
              <input type="text" className="odd-input" />

              <input type="number" className="even-input" />
            </div>
            <div className="betprice-box">
              <span className="bet-amount">ggg</span>
              <span>1K</span>
              <span>2K</span>
              <span>3K</span>
              <span>5k</span>
              <span>10K</span>
              <span>20k</span>
              <span>25K</span>
              <span>50K</span>
              <span>1L</span>
              <span>2L</span>
              <span>C</span>
            </div>
            <div>
              <button className="clear-all-btn">Clear All</button>
              <button className="place-bet-btn">Place Bet</button>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="matched-bet">Matched bet (0)</span>
                <span className="fancy-bet">Fancy bet (0)</span>
                <span className="completed-fancy">completed fancy</span>
              </Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Runner</th>
                      <th>Odds</th>
                      <th>Stack</th>
                      <th>Bet Type</th>
                      <th>Place Time</th>
                      <th>Matched Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
                <span className="no-placed">No placed bet found !</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ViewMatch;
