import React, { useState } from "react";
import "./postsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const commentIcon = <FontAwesomeIcon icon={faComment} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

const LikeAndComment = ({ comments, likes }) => {
  const [like, setLike] = useState("fa fa-heart-o");
  const handleLike = () => {
    if (like === "fa fa-heart-o") setLike("fa fa-heart");
    if (like === "fa fa-heart") setLike("fa fa-heart-o");
  };
  return (
    <>
      <br></br>
      <div className='likeAndComment'>
        <div
          className='likes'
          onClick={handleLike}
          style={{ cursor: "pointer" }}>
          <p id='likes'>
            <i
              style={{ marginRight: "0.3rem", paddingTop: "0.05rem" }}
              class={like}
              aria-hidden='true'></i>
            {`${likes} Likes`}
          </p>
        </div>
        <div>
          {/* <p>{element}</p> <p>{element2} 123</p> */}
          <p className='comments' style={{ cursor: "pointer" }}>
            <i
              style={{ marginRight: "0.3rem", paddingTop: "0.05rem" }}
              class='fa fa-comment-o'
              aria-hidden='true'></i>
            {`${comments} Comments`}
          </p>
        </div>
      </div>
    </>
  );
};

export default LikeAndComment;
