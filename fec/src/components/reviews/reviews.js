import React, { Fragment, useState } from "react";
import "/Users/hunteralbert/Desktop/FEC/fec/src/App.css";
import { Col, Row, Progress } from "reactstrap";
import RatingSnapshot from "./ratingSnapshot";
import ReviewBody from "./reviewBody";
import EditEvent from "./modal.js";
import DropDown from "./dropDown.js"
// import { useState } from "react/cjs/react.production.min";
console.log('start')

function Reviews() {
  
  return (
    <Fragment>
      
      <ul>
        Reviews
        <EditEvent></EditEvent>
      </ul>
      <RatingSnapshot></RatingSnapshot>

      
      <ReviewBody></ReviewBody>
   
   
    </Fragment>
  );
}

export default Reviews;