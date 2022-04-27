import React, { useEffect, useState } from "react";
import HoverPic from "./HoverPic";
import ProdDetails from "./ProdDetails";
import { Button } from "reactstrap";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import { productState } from "./state";
import {
  useRecoilState,
} from 'recoil';

const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);
  const [sku, setSku] = useState([]);
  const [text, setText] = useRecoilState(productState);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3002/product/1/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProduct(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );;
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <Row gx-5="true">
            <Col className="d-flex">Home  /  Electronics /  Computers & Tablets /  Ipad, Tablets, & Ereaders / </Col>
        </Row>
        <Row>
            <Col className="d-flex">
            {product[0].category}
            </Col>
        </Row>
        <Row>
            <HoverPic />
            <ProdDetails />
        </Row>
      </Container>
    );
  }
};

export default Products;
