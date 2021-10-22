// import React from "react";
import { NavDropdown, Nav, Container, Navbar, Row, Col } from "react-bootstrap";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import "materialize-css/dist/css/materialize.min.css";

import React, { Route, Switch } from "react";

const TopNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Row>
          <Col xs={8} md={8}>
            {" "}
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </Col>
          <Col style={{ float: "right" }} xs={4} md={4}>
            {" "}
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <NavDropdown
                  style={{ float: "right" }}
                  title='Dropdown'
                  id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
