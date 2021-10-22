import React, { Component } from "react";

const AboutImage = ({ myImage }) => {
  return (
    <img
      src={myImage}
      alt='img'
      style={{ width: "1.3rem", height: "1.2rem", marginRight: "1rem" }}></img>
  );
};

export default AboutImage;
