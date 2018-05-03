import React, { SFC } from "react";
import { withTheme } from "styledComponents";

import { TArrowBackProps } from "./types";

const ArrowBack: SFC<TArrowBackProps> = ({
  theme,
  width = 18,
  height = 18
}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 7.895v2.21H4.311l6.279 6.305L9 18 0 9l9-9 1.59 1.59L4.31 7.895z"
        fill={theme.colors.tertiary}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default withTheme(ArrowBack);
