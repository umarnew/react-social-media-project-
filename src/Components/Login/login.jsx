import { width } from "dom-helpers";
import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import loginImage from "./login.png";
//style:
import "./loginStyle.css";

const Login = () => {
  return (
    <div className='login_form container align-self-center col-sm-8'>
      <div className='col-sm '>
        <img className=' loginImage' src={loginImage} alt='login' />
      </div>

      <div className='col-sm fullForm'>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Sign In</h1>
        <Form>
          <Form.Group className='mb-4' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className='inputFiled'
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exampleForm.ControlInput1'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className='inputFiled'
              type='password'
              placeholder='Password'
            />
          </Form.Group>
        </Form>
        <div className='agreeCheckBox'>
          <input type='checkbox' class='form-check-input' id='exampleCheck1' />
          <label class='form-check-label' for='exampleCheck1'>
            I agree to Terms and Conditions
          </label>
        </div>
        <Button
          //  className='signIn1'
          className='form-control'
          as='input'
          type='submit'
          value='Submit'
        />{" "}
      </div>
      <br />
    </div>
  );
};

export default Login;
