import React from "react";
import "./styles/HomeListings.css";
import ArtComponent from "./ArtComponent";
import { arts } from "../arts";

function HomeListings(props) {
  return (
    <div className="homeListing">
      <div className="recentWorks">
        <div className="msg">
          <p>My Recent Works</p>
          <p>Here is a collection of my works</p>
        </div>
        <button>View All Works</button>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {arts.map((art) => (
          <ArtComponent art={art}></ArtComponent>
        ))}
      </div>
    </div>
  );
}

export default HomeListings;
