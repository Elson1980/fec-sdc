import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Col, Row, Progress } from "reactstrap";

const ReviewBody = () => {
  const [item, setItem] = useState([]);
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:3001");
      const jsonData = await response.json();
      console.log(jsonData, "json length");
      setItem(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  

  var daysBetween = (date) =>{
    var newDate = new Date(date)
        var milli = newDate.getTime();
        var now = Date.now();
        var difference = (milli - now) / 86400000
        if(difference < 7){
            return difference + + ' Days Ago'

        } else if(difference < 30){
            return (Math.round(difference / 7)+ ' Weeks Ago')

        } else if(difference > 30) {
            return (Math.round(difference / 30) + ' Months Ago')
        }
    
  }
    
  let Get2 = ({edit}) => {
    const [authName, setAuthName] = useState(edit);
    const [authReturn, setAuthReturn] = useState()
    const getAuthor = async (edit) => {
        try {
          const response = await fetch(`http://localhost:3001/a/${authName}`);
          const jsonData = await response.json();
          setAuthReturn(jsonData[0].author_name);
        } catch (err) {
          console.log(err.message);
        }
      };
      useEffect(() => {
        getAuthor();
      }, []);
      return(authReturn)
  };

  var test = "";
  item.forEach((element) => {
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
      {item.map((e) => (
        <div key={e.id}>
          <div className="userStar">
            <div>{testFunc(e.review_stars)}</div>
            <div><Get2 edit = {e.author_id}></Get2></div>
            <div>{(daysBetween(e.review_date))}</div>
          </div>
          <div className="centralReview">
            <div>
              Size and Weight
              <div>this is a description</div>
              <div>Yes, recommend this product</div>
              <section>
                Helpful?
                <button>Yes</button>
                <button>No</button>
                <button>Report</button>
              </section>
            </div>

            <div>
              Quality of Product
              <div>
                <Progress value={100} style={{ width: "100px" }}></Progress>
              </div>
              <div>
                Value of Product
                <div>
                  <Progress value={100} style={{ width: "100px" }}></Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      page change will go here
    </div>
  );
};
export default ReviewBody;
