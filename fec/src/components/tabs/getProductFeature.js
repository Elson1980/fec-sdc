import React, { Component, useEffect, useState } from "react";

const ListFeatures = () => {
  
  const [feature, setFeature] = useState([]);

  const getFeature = async () => {
    try {
      const res = await fetch("http://localhost:3001/features");
      const jsonList = await res.json();
      setFeature(jsonList);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeature();    
  }, []);

  return (
    <div className="productTabs">
          <div className="productInfo" style={{ fontWeight: "bold" }}>
            Product Information
          </div>
          <p></p>
          <p className="productInfo"><span>
            These items are available only in 48 contiguous United States. For
            orders Outside the Continental United States (OCONUS) contact our
            Special Order Team at{" "}
            <a href="mailto:WhiteGlove@nexweb.org">WhiteGlove@nexweb.org</a>.
          </span>
          </p>
          <p className="productInfo"><span>
            Click
            {" "}
            <a href="https://www.mynavyexchange.com/nex/customer-service/shipping-info"> here</a>
            {" "}
            for Shipping & Return and Customer Care Center information.
          </span>
          </p>          
          <p className="productInfo">
            iPad Pro features the powerful Apple M1 chip for next-level
            performance and all-day battery life. An immersive 12.9-inch Liquid
            Retina XDR display for viewing and editing HDR photos and videos.
            And a front camera with Center Stage keeps you in frame
            automatically during video calls. iPad Pro has pro cameras and a
            LiDAR Scanner for stunning photos, videos, and immersive AR.
            Thunderbolt for connecting to high-performance accessories. And you
            can add Apple Pencil for note-taking, drawing, and marking up
            documents, and the Magic Keyboard for a responsive typing experience
            and trackpad.
          </p>
          <p className="productInfo">Features</p>
          {feature.map((e) => (
            <ul key={e.id} className="productInfo">
              <li className="featureList">{e.feature}</li>
            </ul>
          ))}
      </div>  
  );
};

export default ListFeatures;
