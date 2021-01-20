import React from "react";
import "./ArchivePage.css";
import Header from "../components/Header";
import AvailableWorks from "../components/AvailableWorks";

function ArchivePage(props) {
  return (
    <div>
      <Header></Header>
      <div className="ArchivePage">
        <div className="categoriesPart">
          <h2>Categories</h2>
          <div className="categoriesGrouping">
            <p>Available Works</p> <span>(4)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Sold Works</p> <span>(10)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Works in Progress</p> <span>(2)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Featured Artiste</p> <span>(5)</span>
          </div>
        </div>
        <div className="componentSection">
          <AvailableWorks></AvailableWorks>
        </div>
      </div>
    </div>
  );
}

export default ArchivePage;
