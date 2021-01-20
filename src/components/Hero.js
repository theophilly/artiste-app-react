import React from "react";
import Header from "./Header";

function Hero(props) {
  return (
    <>
      <Header />
      <div className="head"></div>
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-container">
          <p className="aboutArtiste">
            " Baa Ruu Waa Artistry is a section of the Mbari Mbayo Art Movement,
            that is notable for the revival of the mind and a re-dedication to
            the culture in which one belongs".
          </p>
          <p className="artisteName">-Artiste Akinjide Baruwa</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
