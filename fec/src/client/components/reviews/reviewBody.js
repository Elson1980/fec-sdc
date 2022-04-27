import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {Progress} from "reactstrap";
var testerr = 0
var totalLength = 0;
var outerIndex = 5;
var innerIndex = 1
var boolean = false;
var maxVal = 0
const ReviewBody = () => {
  
  
  const [place, setPlace] = useState();
  const [items, setItems] = useState([]);
  
    const getReviews = async () => {
      try {
        console.log('attempting database fetch')
        const response = await fetch(`http://localhost:3002/`);
        const jsonData = await response.json();
        setPlace(jsonData.length)
       
      } catch (err) {
        console.log(err.message);
      }
      return(totalLength)
     
    };
    useEffect(() => {
      console.log('updating place')
     
      getReviews()
      
    }, []);

  const getItems = async (e) => {
    console.log(boolean)
    try {
      var index = 0
      console.log(place, 'total length')
    
      console.log(e, 'e at 93')
      if(testerr < 0){
        testerr = 0
      }
      maxVal = Math.floor(place / 5)
      if(testerr >= maxVal){
        testerr = maxVal
      }
      if(e === undefined){
        index = 0;

      } else if(e * 5 >= place - 5){
        index = place - 5
        console.log(e, place, 'inside else if')
        
        outerIndex = index + 5
        innerIndex = index
      } else if(e < 0) {
        index = 0;
      } else {
        index = e * 5
        outerIndex = index + 5
        innerIndex = index

      }
      console.log(index, 'i at 105')
      
      
      const response = await fetch(`http://localhost:3002/${index}`);
      const jsonData = await response.json();
        
      setItems(jsonData);
      
      
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    
    
    console.log('rerender!')
   
    getItems();
    
  }, []);

 

  var daysBetween = (date) => {
    var newDate = new Date(date);
    var milli = newDate.getTime();
    var now = Date.now();
    var difference = (milli - now) / 86400000;
    if (difference < 7) {
      return difference + " Days Ago";
    } else if (difference < 30) {
      return Math.round(difference / 7) + " Weeks Ago";
    } else if (difference > 30) {
      return Math.round(difference / 30) + " Months Ago";
    }
  };

  let PagePlus = () => {
    testerr++
    console.log(testerr, 'tester at + function')
    boolean = true
    return getItems(testerr);
  };

  let PageMinus = () => {
    testerr--
    console.log(testerr, 'tester at - function')
    boolean = false;
    return getItems(testerr);
  };
  const recommend = (value) => {
    if (value == false) {
      return "No, do not recommend this product.";
    } else {
      return "Yes, recommend this product.";
    }
  };
  const starToDecimal = (value) => {
    return (value / 5) * 100;
  };

  var test = "";
  items.forEach((element) => {
    test = element.author_id;
  });
  var testFunc = (starVal) => {
    var starTemp = "";
    for (var i = 0; i < starVal; i++) {
      starTemp += "★";
    }
    return starTemp;
  };
  return (
    <div>
     
      Events
      <div className="reviewCounter">
      {innerIndex} - {outerIndex} of {place} 
        <div>Sort By Most Recent</div>
        
      </div>
      <div className="activeFilters">
        <div>Active Filters</div>
      </div>
      <div className="activeFilters">
        <button style={{ "backgroundColor": "royalblue", color: "white" }}>
          5 stars
        </button>
        <button>Clear Alls</button>
      </div>
      {items.map((e) => (
        <div key={e.id}>
          <div className="userStar">
            <div>{testFunc(e.review_stars)}</div>
            <div>
              {/* <Get2 edit={e.author_id}></Get2> */}
              {e.author_r_name}
            </div>
            <div>{daysBetween(e.review_date)}</div>
          </div>
          <div className="centralReview">
            <div>
              {e.review_title}
              <div>{e.review_body}</div>
              <div>{recommend(e.review_recommend)}</div>
              <section>
                Helpful?
                <button>Yes: {e.review_helpful_yes}</button>
                <button onClick={() => getItems()}>No: {e.review_helpful_no}</button>
                <button>Report</button>
              </section>
            </div>

            <div>
              Quality of Product
              <div>
                <Progress
                  value={starToDecimal(e.review_quality)}
                  style={{ width: "100px" }}
                ></Progress>
              </div>
              <div>
                Value of Product
                <div>
                  <Progress
                    value={starToDecimal(e.review_value)}
                    style={{ width: "100px" }}
                  ></Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={PagePlus}>+</button>
      <button onClick={PageMinus}>-</button>
      page change will go here
    </div>
  );
};
export default ReviewBody;
