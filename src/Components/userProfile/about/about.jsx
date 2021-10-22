import React, { Component } from "react";
import pic from "./download2.jpg";
import "./aboutStyle.css";
import { LoremIpsum, Avatar, loremIpsum } from "react-lorem-ipsum";
import pic1 from "./instagram.png";
import pic2 from "./1.png";
import pic3 from "./2.png";
import pic4 from "./3.jpg";
import AboutImage from "./aboutImage";

const About = () => {
  return (
    <>
      <div className='image' style={{ marginTop: "0.5rem" }}>
        <img className='persomImage' src={pic} alt='personPicture'></img>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "0.5px" }}>
          <strong>Thomas Lean</strong>
        </p>
        <p style={{ marginBottom: "0px" }}>Front end developer</p>
        <p>United States of America</p>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "1rem", marginBottom: "0px" }}>
          <strong>Email</strong>
        </p>

        <p>thomasflicker@gmail.com</p>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "1rem", marginBottom: "0px" }}>
          <strong>Phone no</strong>
        </p>

        <p>+12 221 02391021</p>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "1rem", marginBottom: "0px" }}>
          <strong>About</strong>
        </p>

        <p>
          <LoremIpsum p={1} w={12} />{" "}
        </p>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "1rem", marginBottom: "0px" }}>
          <strong>Software Skill</strong>
        </p>

        <p style={{ marginTop: "1rem" }}>
          {" "}
          <AboutImage myImage={pic1} />
          <AboutImage myImage={pic2} />
          <AboutImage myImage={pic3} />
          <AboutImage myImage={pic4} /> <AboutImage myImage={pic2} />
        </p>
      </div>
    </>
  );
};

export default About;
