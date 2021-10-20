import React, { Component } from "react";
import Comments from "./comments";
import Person from "./person";
const Post = ({
  postingPersonPicture,
  postingPersonName,
  postingTime,
  postText,
  postPicturesArray,
  comments,
  likes,
}) => {
  return (
    <>
      <Person
        postingPersonName={postingPersonName}
        postingTime={postingTime}
        postingPersonPicture={postingPersonPicture}
      />
      <Comments />
    </>
  );
};

export default Post;
