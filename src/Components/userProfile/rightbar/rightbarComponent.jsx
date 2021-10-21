import React, { Component } from "react";
import "./rightbarStyle.css";

const RightBarComponent = ({
  postingRightBarComponentPicture = "",
  postingRightBarComponentName,
  postingTime,
}) => {
  return (
    <div>
      <img className='postImage' src={postingRightBarComponentPicture} alt='' />

      <div className='postTimeAndName'>
        <strong>{postingRightBarComponentName}</strong>
        <p>{postingTime}</p>
      </div>
    </div>
  );
};

export default RightBarComponent;
