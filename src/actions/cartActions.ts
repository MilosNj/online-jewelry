import axios from "axios";
import { Dispatch } from "react";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart =
  (id: string, quantity: number) => async (dispatch: Dispatch<any>) => {
    const { data } = await axios.get(`/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    });
  };

export const removeFromCart = (id: number) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};
