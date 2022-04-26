
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Col, Row, Progress } from "reactstrap";
import { ListItem } from "./getData";




const RatingSnapshot = () => {
    const [item, setItem] = useState([])
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:3002");
      const jsonData = await response.json();
      // console.log(jsonData, 'json length');
      setItem(jsonData)
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

 var testArr = [];
 var overallQuality = 0;
 var overallValue = 0;
 var overallStars = 0;

 var testObj = {}
 item.forEach(element => {
   testArr.push(element.id)
   overallQuality += element.review_quality
   overallValue += element.review_value
   overallStars += element.review_stars
   if(element.review_stars in testObj){
     testObj[element.review_stars] ++ 
   } else {
    testObj[element.review_stars] = 1;
   }
   
   
 });
var RS5 = ((testObj['5'] / item.length) * 100).toFixed(0)
var RS4 = ((testObj['4'] / item.length) * 100).toFixed(0)
var RS3 = ((testObj['3'] / item.length) * 100).toFixed(0)
var RS2 = ((testObj['2'] / item.length) * 100).toFixed(0)
var RS1 = ((testObj['1'] / item.length) * 100).toFixed(0)

//  console.log(RS5,RS4,RS3,RS2,RS1)

var qualNum = (overallQuality / item.length).toFixed(1)
var valNum = (overallValue / item.length).toFixed(1)
var starsNum = (overallStars / item.length).toFixed(1)
var valMeter = (valNum / 5) * 100
var qualMeter = (qualNum / 5) * 100

var overallChar = ''
if(starsNum <= 1){
    overallChar = '★'

} else 
if(starsNum >= 2 && starsNum < 3){
    overallChar = '★★'

}
if(starsNum >= 3 && starsNum < 4){
    overallChar = '★★★'

} else 
if(starsNum >= 4 && starsNum < 4.5){
    overallChar = '★★★★'

} else{
    overallChar  = '★★★★★'
}

const clickTest = () => {
    return(
    <ListItem></ListItem>
    )
}
 

  return (
   
    <ul className="spacer">
        <div className="overview">
          Rating Snapshot
          <div>
            <div>Select a row below to filter reviews</div>
            <div className="rating">
              <div>
                <div>5★</div>
                <div>
                  <Progress value={RS5} onClick={clickTest} style={{ width: "100px" }}></Progress>
                </div>
                <div>{testObj['5']}</div>
              </div>

              <div>
                <div>4★</div>
                <div>
                  <Progress value={RS4} style={{ width: "100px" }}></Progress>
                </div>
                <div>{testObj['4']}</div>
              </div>
              <div>
                <div>3★</div>
                <div>
                  <Progress value={RS3} style={{ width: "100px" }}></Progress>
                </div>
                <div>0</div>
              </div>
              <div>
                <div>2★</div>
                <div>
                  <Progress value={RS2} style={{ width: "100px" }}></Progress>
                </div>
                <div>0</div>
              </div>
              <div>
                <div>1★</div>
                <div>
                  <Progress value={RS1} style={{ width: "100px" }}></Progress>
                </div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview">
          Average Customer Ratings
          <div>
            <section className="enter">
              <div className="test">
                <div>Overall</div>
                <div>{overallChar}</div>
                <div>{starsNum}</div>
              </div>
              <div className="test">
                <div>Value of Product</div>
                <div>
                  <Progress value={valMeter} style={{ width: "100px" }}></Progress>
                </div>
                <div>{valNum}</div>
              </div>
              <div className="test">
                <div>Quality of Product</div>
                <div>
                  <Progress value={qualMeter} style={{ width: "100px" }}></Progress>
                </div>
                <div>{qualNum}</div>
              </div>
            </section>
          </div>
        </div>
        
      </ul>
      

  );
};
export default RatingSnapshot;