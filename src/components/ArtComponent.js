import React from "react";

import "./styles/ArtComponent.css";

function ArtComponent({ art }) {
  return (
    <div className="artImage">
      <img src={art.image}></img>
      <div className="detailscontainer">
        <p> {art.title}</p>
        <span>{art.year}</span>
      </div>
    </div>
  );
}

export default ArtComponent;
