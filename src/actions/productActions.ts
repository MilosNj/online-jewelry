import axios, { AxiosError } from "axios";
import { Dispatch } from "react";

import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
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

export const listProductDetails =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });

      const { data } = await axios.get(`/products/${id}`);

      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      const err = error as AxiosError;

      dispatch({ type: PRODUCT_DETAIL_FAIL, payload: err.message });
    }
  };
