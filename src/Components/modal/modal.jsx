import React, { Component } from "react";
import { Modal, Row, Container, Col, Button } from "react-bootstrap";
import ModalInputField from "./modalInputField";
import "./modalStyle.css";
function MyModal(props) {
  return (
    <Modal
      className='myModal'
      {...props}
      aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit user </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Row>
            <ModalInputField label='First Name' placeHolder='Umar' />
            <ModalInputField label='Last Name' placeHolder='Abdullah' />
          </Row>

          <Row>
            <ModalInputField label='Company' placeHolder='Humburg' />
            <ModalInputField label='Department' placeHolder='Socual' />
          </Row>

          <Row>
            <ModalInputField label='Email' placeHolder='123@gmail.com' />
            <ModalInputField label='Phone#' placeHolder='+92 333 11111' />
          </Row>

          <Row>
            <ModalInputField
              label='Current Password'
              placeHolder='Password'
              type='password'
            />

            <ModalInputField
              label='New Password'
              placeHolder='Password'
              type='password'
            />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='modalFooter'>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button variant='primary'>save</Button>{" "}
        <Button variant='danger'> X Delete Account</Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}
export default MyModal;
