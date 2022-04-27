import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import { useRecoilState } from "recoil";
import { productState } from "./state";
import ReactImageMagnify from "react-image-magnify";

const HoverPic = () => {
  const [text, setText] = useRecoilState(productState);
  return (
    <Col md={5}>
      <div className="pad">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Ipad 2TB Grey",
              // width: 445,
              // height: 500,
              isFluidWidth: true,
              src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126613000",
            },
            largeImage: {
              src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126613000",
              width: 1600,
              height: 2000,
            },
            shouldUsePositiveSpaceLens: true,
          }}
        />
      </div>
      <div className="productImageSwatch" style={{ textAlign: "left" }}>
        <img
          alt="stars review"
          className="img-fluid prev"
          src="/images/img_preview1.jpeg"
        ></img>
        <img
          alt="stars review"
          className="img-fluid prev"
          src="/images/img_preview2.jpeg"
        ></img>
      </div>
    </Col>
  );
};

export default HoverPic;

//"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126613000"
