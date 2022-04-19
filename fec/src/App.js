import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.css";
import ListItem from "./getData";
import { Col, Row, Progress } from "reactstrap";

function App() {
  return (
    <Fragment>
      <Row xs="3">
        <Col className="bg-light border" style={{ height: "50px" }}>
          Column
        </Col>
        <Col className="bg-light border">REVIEWS</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <ul>
        <div>Reviews</div>
        <button>Write a review</button>
      </ul>
      <ul className="spacer">
        <div className="overview">Rating Snapshot
          <div>
          <div>Select a row below to filter reviews</div>
      <div class="rating">
        <div>
        <div>5★</div>
          <div>
            <Progress value={100} style={{width:"100px"}}></Progress>
          </div>
          <div>0</div>
          
        </div>
        
        <div>
        <div>4★</div>
          <div>
            <Progress value={0} style={{width:"100px"}}></Progress>
          </div>
          <div>0</div>
          
        </div>
        <div>
        <div>3★</div>
          <div>
            <Progress value={0} style={{width:"100px"}}></Progress>
          </div>
          <div>0</div>
          
        </div>
        <div>
        <div>2★</div>
          <div>
            <Progress value={0} style={{width:"100px"}}></Progress>
          </div>
          <div>0</div>
          
        </div>
        <div>
        <div>1★</div>
          <div>
            <Progress value={0} style={{width:"100px"}}></Progress>
          </div>
          <div>0</div>
          
        </div>
        

      </div>
          </div>
        </div>
        <div className="overview">Average Customer Ratings
        <div>
        <section className="enter">
        <div className="test">
          <div>Overall</div>
          <div>★★★★★</div>
          <div>5.0</div>
    
        </div>
        <div className="test">
          <div>Overall</div>
          <div><Progress value={100} style={{width:"100px"}}></Progress></div>
          <div>5.0</div>
         
        </div>
        <div className="test">
          <div>Quality of Product</div>
          <div><Progress value={98} style={{width:"100px"}}></Progress></div>
          <div>4.9</div>
         
        </div>


        </section>
        </div>
        </div>

      </ul>
      
      <div className="reviewCounter">
        <div>1-8 of 26 reviews</div>
        <div>Sort By Most Recent
        </div>
      </div>
      <div className="activeFilters">
          <div>Active Filters</div>
        </div>
        <div className="activeFilters">
          <button style={{'background-color':'royalblue', color: 'white'}}>5 stars</button>
          <button >Clear Alls</button>

        </div>
        <div className="userStar">
          <div>***</div>
          <div>Kuya</div>
          <div> A month ago</div>
        </div>
        <div className="centralReview">
         
            <div>Size and Weight
              <div>this is a description</div>
              <div>Yes, recommend this product</div>
              <section>Helpful?
                <button>Yes</button>
                <button>No</button>
                <button>Report</button>
              </section>
            </div>
          
            <div>Quality of Product
             
              <div><Progress value={100} style={{width:"100px"}}></Progress></div>
              <div>Value of Product
             
              <div><Progress value={100} style={{width:"100px"}}></Progress></div>
              
            </div>
              
            </div>
            
          
        </div>

    </Fragment>
  );
}

export default App;
