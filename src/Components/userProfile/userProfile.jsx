import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Posts from "./posts/posts";
const UserProfile = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is{" "}
        </Col>

        <Col xs={2}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is{" "}
        </Col>

        <Col xs={6}>
          <Posts />
        </Col>

        <Col xs={2}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is{" "}
        </Col>
      </Row>
    </>
  );
};

export default UserProfile;
