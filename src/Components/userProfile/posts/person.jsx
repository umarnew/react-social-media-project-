import React, { Component } from "react";

const Person = ({ postingPersonPicture, postingPersonName, postingTime }) => {
  return (
    <>
      <strong>{postingPersonName}</strong>
      <p>{postingTime}</p>
    </>
  );
};

export default Person;
