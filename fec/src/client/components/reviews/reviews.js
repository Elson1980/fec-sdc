import React, { Fragment, useState } from "react";
import { Col, Row, Progress } from "reactstrap";
import RatingSnapshot from "./ratingSnapshot";
import ReviewBody from "./reviewBody";
import EditEvent from "./modal.js";
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