import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Posts from "./posts/posts";
import RightBar from "./rightbar/rightbar";
import SideBar from "./sidebar/sidebar";
const UserProfile = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <SideBar />
        </Col>

        <Col xs={3}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is{" "}
        </Col>

        <Col xs={5}>
          <Posts />
        </Col>

        <Col xs={2}>
          <RightBar />
        </Col>
      </Row>
    </>
  );
};

export default UserProfile;
