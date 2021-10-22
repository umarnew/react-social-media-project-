import React, { Component } from "react";
import RightBarComponent from "./rightbarComponent";
import instagramPic from "./instagram.png";
import pic2 from "./1.png";
import pic3 from "./2.png";
import pic4 from "./3.jpg";

const RightBar = () => {
  return (
    <>
      <div className='rightBarSectionDiv'>
        <p className='rightbarSection'>
          <strong>Experience :</strong>
        </p>
        <RightBarComponent
          postingRightBarComponentName='Instagram'
          postingTime='Web developer, New York'
          postingRightBarComponentPicture={instagramPic}
        />

        <RightBarComponent
          postingRightBarComponentName='Washington'
          postingTime='Web developer, New York'
          postingRightBarComponentPicture={pic2}
        />

        <RightBarComponent
          postingRightBarComponentName='Twitter'
          postingTime='Web developer, New York'
          postingRightBarComponentPicture={pic3}
        />
      </div>

      <div className='rightBarSectionDiv'>
        <p className='rightbarSection'>
          <strong>Education :</strong>
        </p>
        <RightBarComponent
          postingRightBarComponentName='Facebook'
          postingTime='Web developer, New York'
          postingRightBarComponentPicture={pic4}
        />

        <RightBarComponent
          postingRightBarComponentName='Gmail'
          postingTime='Web developer, New York'
          postingRightBarComponentPicture={pic2}
        />
      </div>
    </>
  );
};

export default RightBar;
