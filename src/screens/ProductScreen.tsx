import React from "react";
import { useParams } from "react-router-dom";

import products from "../products";

const ProductScreen = () => {
  const params = useParams();
  const product = products.find((product) => product._id === params.id);

  return <div>{product?.name}</div>;
};

export default ProductScreen;
