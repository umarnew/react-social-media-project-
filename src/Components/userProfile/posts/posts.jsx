import React, { Component } from "react";
import Post from "./post";
import sharesPic from "./shares.jpg";
import sharesPic2 from "./download3.jpg";
import importedImage from "../download2.jpg";

const Posts = () => {
  const picArray = [sharesPic, sharesPic2, sharesPic2];
  const picArray2 = [sharesPic2];

  return (
    <>
      <Post
        postingPersonPicture={importedImage}
        postPicturesArray={picArray}
        postingPersonName='Umar'
        postingTime='11 feb'
      />

      <Post
        postingPersonPicture={importedImage}
        postingPersonName='Jim Kereal'
        postingTime='12 June 2018'
        postText='Hi  @everyone Here is Latest Design design, everyone check it out. Thanks'
        postPicturesArray={picArray2}
        comments='10'
        likes='19'
      />
    </>
  );
};

export default Posts;
