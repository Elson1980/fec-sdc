import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ProdDetails = () => {
  return (
    <Col md={7}>
      <h6 className="text-start">Apple</h6>
      <h3 className="text-start">
        Apple 12.9 iPad Pro,(5th Gen) M1 Chip, Wi-Fi
      </h3>
      <div style={{ textAlign: "left" }}>
        <img alt="stars review" src="/images/rating-4_8.gif"></img>
        <span> 4.76 Based on 25 reviews</span>
      </div>
      <div className="msrp" style={{ textAlign: "left" }}>
        MSRP:$2199
      </div>
      <Col md={5}>
        <div style={{ textAlign: "left" }}>
          <Form>
            <FormGroup>
              <Label>Color</Label>
              <Input type="select">
                <option>Space Gray</option>
              </Input>
            </FormGroup>
          </Form>
        </div>
      </Col>
      <div style={{ textAlign: "left" }}>
        <img
          alt="stars review"
          className="img-fluid text-start"
          src="/images/img_thumbnail.jpeg"
        ></img>
      </div>
      <Col md={5}>
        <div style={{ textAlign: "left" }}>
          <Form>
            <FormGroup>
              <Label>Size</Label>
              <Input type="select">
                <option>512 GB</option>
                <option>1 TB</option>
                <option>2 TB</option>
              </Input>
            </FormGroup>
          </Form>
        </div>
      </Col>
      <Col md={3}>
        <div style={{ textAlign: "left" }}>
          <Form>
            <FormGroup>
              <Label>QTY</Label>
              <Input type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Form>
        </div>
      </Col>

      <div style={{ textAlign: "left" }}>
        <Form>
          <FormGroup check>
            <Label>AppleCare For IPad Pro 12.9 5th Generation - $149.00</Label>
            <Input type="checkbox" />
          </FormGroup>
        </Form>
      </div>
      <hr></hr>
      <div>
        <div style={{ textAlign: "left" }}>
          <img alt="add to wishlist" src="/images/addToIcon.png"></img>
          <span>Add to Wishlist</span>
          <img alt="add to registry" src="/images/addToIcon.png"></img>
          <span>Add to Registry</span>
          <span style={{ float: "right" }}>
            <img alt="print" src="/images/printIcon.png"></img>
            <img alt="email" src="/images/emailIcon.png"></img>
            <img alt="facebook" src="/images/facebookIcon.png"></img>
            <img alt="pinterest" src="/images/pinterestIcon.png"></img>
            <img alt="twitter" src="/images/twitterIcon.png"></img>
          </span>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <Button className="addCartBtn btn-block">ADD TO CART</Button>
      </div>
    </Col>
  );
};

export default ProdDetails;
