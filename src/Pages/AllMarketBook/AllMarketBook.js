import React from "react";
import "./AllMarketBook.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import MobileMenuBar from "../../Components/MobileMenuBar/MobileMenuBar";
const AllMarketBook = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="my-market-main">
        <div className="my-mart-div">MY MARKET</div>
        <div className="no-reacod-div">No Record Found</div>
      </div>
      <MobileMenuBar />
    </div>
  );
};

export default AllMarketBook;
