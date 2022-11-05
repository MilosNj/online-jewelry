import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import { useAppDispatch, useAppSelector } from "../hooks";

interface IProduct {
  _id: number;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  countInStock: number;
  numOfReviews: number;
  price: number;
  rating: number;
}

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const productList: any = useAppSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product: IProduct) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
