import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
const ModalInputField = ({ label, placeHolder, type = "text" }) => {
  console.log(placeHolder);
  return (
    <>
      {" "}
      <Col xs={6} md={6}>
        <Form.Group className='mb-6' controlId='exampleForm.ControlInput1'>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            className='inputFiled'
            type={type}
            placeholder={placeHolder}
          />
        </Form.Group>
      </Col>
    </>
  );
};

export default ModalInputField;
