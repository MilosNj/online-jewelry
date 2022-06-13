import axios from "axios";
import { Dispatch } from "react";
import { CART_ADD_ITEM } from "../constants/cartConstants";

import { RootState } from "../store";

export const addToCart =
  (id: string, quantity: string) =>
  async (dispatch: Dispatch<any>, getState: () => RootState) => {
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
