import React from "react";
import Star from "./Star";

interface AppProps {
  value: number | undefined;
  text: string;
}

const Rating = ({ value, text }: AppProps) => {
  const stars: JSX.Element[] = [];

  for (let index = 1; index <= 5; index++) {
    stars.push(<Star key={index} value={value ? value : 0} index={index} />);
  }

  return (
    <div className="rating">
      {stars}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
