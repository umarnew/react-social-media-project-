import React, { Component } from "react";
import { Form } from "react-bootstrap";
const CommentBox = () => {
  return (
    <Form.Control
      className='commentBox'
      type='email'
      placeholder='Write a comment...'
    />
  );
};

export default CommentBox;
