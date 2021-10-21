import React, { Component } from "react";
import "./postsStyle.css";

const Person = ({
  postingPersonPicture = "",
  postingPersonName,
  postingTime,
}) => {
  return (
    <div>
      <img className='postImage' src={postingPersonPicture} alt='' />
      <i
        class='fa fa-ellipsis-v'
        style={{
          fontSize: "1rem",
          float: "right",
          marginTop: "0.4rem",
          marginRight: "0.4rem",
        }}></i>

      <div className='postTimeAndName'>
        <strong>{postingPersonName}</strong>
        <p>{postingTime}</p>
      </div>
    </div>
  );
};

export default Person;
