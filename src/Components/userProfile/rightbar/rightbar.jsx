import React, { Component } from "react";
import RightBarComponent from "./rightbarComponent";
import instagramPic from "./instagram.png";
const RightBar = () => {
  return (
    <>
      <RightBarComponent
        postingRightBarComponentName='Instagram'
        postingTime='Web developer, New York'
        postingRightBarComponentPicture={instagramPic}
      />
    </>
  );
};

export default RightBar;
