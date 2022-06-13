import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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

  return <div>CartScreen</div>;
};

export default CartScreen;
