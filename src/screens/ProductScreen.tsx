import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Rating from "../components/Rating";

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

const ProductScreen = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProduct>({
    _id: 0,
    name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    countInStock: 0,
    numOfReviews: 0,
    price: 0.0,
    rating: 0.0,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const fetchProductById = async () => {
      try {
        const { data } = await axios.get(`/products/${params.id}`);
        setProduct(data);
      } catch (error) {
        const err = error as AxiosError;

        if (axios.isCancel(err)) {
          console.log("Successfully canceled fetch.");
        } else {
          console.log(err.message);
        }
      }
    };

    fetchProductById();

    return () => {
      source.cancel();
    };
  }, [params.id]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product?.rating}
                text={` ${product?.numOfReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product?.countInStock
                      ? product.countInStock > 0
                        ? "In Stock"
                        : "Out Of Stock"
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                <Button type="button" disabled={product?.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
