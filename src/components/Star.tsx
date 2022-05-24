import React from "react";

interface AppProps {
  value: number;
  index: number;
}

const Star = ({ value, index }: AppProps) => {
  return (
    <span>
      <i
        style={{ color: "#f8e825" }}
        className={
          value >= index
            ? "fas fa-star"
            : value >= index - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  );
};

export default Star;
