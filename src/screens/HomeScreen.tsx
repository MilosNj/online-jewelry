import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product";

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
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/products");
        setProducts(data);
      } catch (error) {
        const err = error as AxiosError;

        if (axios.isCancel(err)) {
          console.log("Successfully canceled fetch.");
        } else {
          console.log(err.message);
        }
      }
    };

    fetchProducts();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
