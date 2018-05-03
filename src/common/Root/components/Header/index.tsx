import React, { SFC } from "react";
import { Link } from "react-router-dom";
import styled from "styledComponents";
import { rgba } from "polished";

import { THeaderProps } from "./types";

const H = styled.header`
  display: flex;
  flex: 0 0 ${({ theme }) => theme.scale.second};
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 16px ${({ theme }) => rgba(theme.colors.quaternary, 0.54)};
`;

const UserInfo = styled.section``;

const Nav = styled.nav`
  margin: 0 ${({ theme }) => theme.scale.first} 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Header: SFC<THeaderProps> = props => {
  if (["/login", "/registration"].includes(props.location.pathname))
    return null;

  return (
    <H>
      <UserInfo />
      <Nav>
        <StyledLink to="/logout">Logout</StyledLink>
      </Nav>
    </H>
  );
};

export default Header;
