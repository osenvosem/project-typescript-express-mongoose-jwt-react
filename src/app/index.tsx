import React from "react";

interface Props {
  message: string;
}

export default ({ message }: Props) => <p>{message}</p>;
