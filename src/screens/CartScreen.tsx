import React, { useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
import { useAppDispatch, useAppSelector } from "../hooks";

const CartScreen = () => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const cart: any = useAppSelector((state) => state.cart);

  const productId = params.id;
  const quantity = location.search ? +location.search.split("=")[1] : 1;
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            <>
              Your cart is empty. <Link to="/">Go back</Link>
            </>
          </Message>
        ) : (
          <ListGroup variant="flush"></ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
