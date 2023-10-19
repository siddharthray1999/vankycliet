import React from "react";
import "./ProfitLoss.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Table from "react-bootstrap/Table";
import MobileMenuBar from "../../Components/MobileMenuBar/MobileMenuBar";
const ProfitLoss = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div>
        <div className="profit-lisiting">
          <div>
            <span>PROFIT LOSS LISTING</span>
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <button className="profit-btn">Back</button>
        </div>
        <div className="select-date">
          <select className="select-game">
            <option>All</option>
            <option>Cricket</option>
            <option>Soccer</option>
            <option>Tennis</option>
            <option>Fancy</option>
            <option>Live Casino</option>
          </select>
          <input type="date" className="profit-loss-input" value="2000-05-05" />
          <input type="date" className="profit-loss-input" value="2000-05-05"/>
          <button className="filter-btn">Filter</button>
        </div>
        <div className="profit-loss-table-div">
          <Table striped bordered style={{ width: "83%", marginTop: "10px" }}>
            <tbody>
              <tr>
                <td>S.No.</td>
                <td>Event Name</td>
                <td> Market</td>
                <td>P_L</td>
                <td>Commission</td>
                <td>Created On</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <MobileMenuBar/>
    </div>
  );
};

export default ProfitLoss;
