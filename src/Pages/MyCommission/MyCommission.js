import React from "react";
import "./MyCommission.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Table from "react-bootstrap/Table";
import MobileMenuBar from "../../Components/MobileMenuBar/MobileMenuBar";
const MyCommission = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="commission-div">
        <div className="my-commi">MY COMMISSION</div>
        <div className="comi-date">
          <div>
            <input type="date" />
          </div>
          <div>
            <input type="date" />
          </div>
          <div>
            <button className="btn-search">Search</button>
          </div>
        </div>
        <div>
          <Table striped bordered hover style={{ marginTop: "10px" }}>
            <tbody className="table-name">
              <tr>
                <td>Date</td>
                <td>M. Comm.</td>
                <td>S. Comm.</td>
                <td>C. Comm.</td>
                <td>T. Comm.</td>
                <td>Name</td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <MobileMenuBar />
    </div>
  );
};

export default MyCommission;
