import React from "react";
import "./styles/ExhibitionSection.css";
import ExhibitionComponent from "./ExhibitionComponent";

function ExhibitionSection(props) {
  return (
    <div className="ExhibitionSection">
      <div className="firstSection">
        <div> gggggggggg</div>
      </div>
      <div className="secondSection">
        <ExhibitionComponent />
        <ExhibitionComponent />
        <ExhibitionComponent />
        <ExhibitionComponent />
      </div>
    </div>
  );
}

export default ExhibitionSection;
