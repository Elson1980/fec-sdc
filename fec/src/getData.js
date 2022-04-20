import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


var escapedData = 0;
const testFunc = (test) =>{
  escapedData = test;

}

const ListItem = () => {
    const [item, setItem] = useState([])
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:3001");
      const jsonData = await response.json();
      console.log(jsonData, 'json length');
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
testFunc(RS5)
console.log()
 

  return (
   
    <main>
      
      Item
      {item.map((e) => (
        <form key={e.id}>
        <section>
            {e.review_title}
            
            
            
          
        </section>
        <section>
        
        </section>

        
        
      </form>
      ))}
    {console.log(testArr)}
    </main>
  );
};
export {ListItem, escapedData};