import React, { Component } from "react";
import "./rightbarStyle.css";

const RightBarComponent = ({
  postingRightBarComponentPicture = "",
  postingRightBarComponentName,
  postingTime,
}) => {
  return (
    <div class='rightbarComponent'>
      <img
        className='postImageRightBar'
        src={postingRightBarComponentPicture}
        alt=''
      />

      <div style={{ marginBottom: "0.1rem", textAlign: "left", float: "left" }}>
        <strong>{postingRightBarComponentName}</strong>
        <p style={{ fontSize: "0.8rem" }}>{postingTime}</p>
      </div>
    </div>
  );
};

export default RightBarComponent;
