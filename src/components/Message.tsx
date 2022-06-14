import React from "react";
import { Alert } from "react-bootstrap";

type Props = {
  variant: string;
  children: JSX.Element;
};

const Message = ({ variant, children }: Props) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
