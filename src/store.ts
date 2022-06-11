import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
