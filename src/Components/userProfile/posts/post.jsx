import React, { Component } from "react";
// import Comments from "./comments";
import Person from "./person";
import importedImage from "../download2.jpg";
import "./postsStyle.css";
import MyText from "./text";
import LikeAndComment from "./likesAndComments";
import CommentBox from "./comment";

const Post = ({
  postingPersonPicture,
  postingPersonName,
  postingTime = "11 Jan",
  postText = "Hi  @everyone Here is new design, everyone check it out. Thanks",
  postPicturesArray,
  comments = "7",
  likes = "8",
}) => {
  // postText =
  //   "Hi <strong> @everyone </strong> Here is new design, everyone check it out. Thanks";
  // postingPersonPicture = { importedImage };

  return (
    <div className='post'>
      <Person
        postingPersonPicture={postingPersonPicture}
        postingPersonName={postingPersonName}
        postingTime={postingTime}
      />
      <br></br>
      {/* <p className='text'>{postText}</p> */}
      <MyText postText={postText} />
      <div className='postImagesAll'>
        {postPicturesArray.map((pic) => {
          return (
            <img className='postImages' src={pic} alt='post pictures'></img>
          );
        })}
      </div>
      <LikeAndComment comments={comments} likes={likes} />
      <CommentBox />
      {/* <h1> .</h1> */}
    </div>
  );
};

export default Post;
