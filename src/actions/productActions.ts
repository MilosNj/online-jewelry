import axios, { AxiosError } from "axios";
import { Dispatch } from "react";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const err = error as AxiosError;
    dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message });
  }
};
