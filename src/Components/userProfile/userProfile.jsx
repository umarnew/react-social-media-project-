import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import About from "./about/about";
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
          <About />
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
