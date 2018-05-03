import styled from "styledComponents";
import { rgba, stripUnit } from "polished";
import { Link } from "react-router-dom";

import { TFullNameProps } from "./types";

export const Card = styled(Link)`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.scale.third};
  padding: 0 ${({ theme }) => theme.scale.first} 0;
  :not(:first-child) {
    margin-top: ${({ theme }) => theme.scale.first};
  }
  box-shadow: 0 4px 16px ${({ theme }) => rgba(theme.colors.quaternary, 0.54)};
  text-decoration: none;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  background-color: white;
  border-radius: ${({ theme }) => theme.scale.mFirst};
`;

export const FullName = styled<TFullNameProps, "h2">("h2")`
  display: block;
  margin: 0;
  font-size: ${({ theme }) => theme.scale.base};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")}
  color: rgba(0, 0, 0, 0.87);
`;

export const Username = styled.h3`
  display: block;
  margin: 0;
  font-size: ${({ theme }) => theme.scale.base};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
`;
