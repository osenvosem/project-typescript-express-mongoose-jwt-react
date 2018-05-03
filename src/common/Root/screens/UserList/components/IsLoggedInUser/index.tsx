import React, { SFC } from "react";
import styled from "styledComponents";

import { TIsLoggedInUserProps } from "./types";

const ThisIsYou = styled.p`
  display: inline-block;
  margin: 0;
  font-size: ${({ theme }) => theme.scale.base};
  font-style: italic;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.quaternary};
`;

const IsLoggedInUser: SFC<TIsLoggedInUserProps> = ({
  loggedInUserId,
  userId
}) => {
  return loggedInUserId === userId ? (
    <ThisIsYou> &nbsp; — this is you</ThisIsYou>
  ) : null;
};

export default IsLoggedInUser;
