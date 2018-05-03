import styled from "styledComponents";
import { rgba } from "polished";
import { Link } from "react-router-dom";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.scale.first};
  padding: ${({ theme }) => theme.scale.first};
  box-shadow: 0 4px 16px ${({ theme }) => rgba(theme.colors.quaternary, 0.54)};
`;

export const FullName = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.scale.second};
  color: rgba(0, 0, 0 0.87);
  font-weight: normal;
`;

export const Username = styled.h3`
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: normal;
`;

export const Email = styled.p`
  margin: ${({ theme }) => theme.scale.second} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`;

export const RegisteredSince = styled.p`
  margin: ${({ theme }) => theme.scale.first} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`;

export const Buttons = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.scale.third};
`;

export const BaseButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: ${({ theme }) => theme.scale.fifth};
  height: ${({ theme }) => theme.scale.second};
  border: none;
  border-radius: ${({ theme }) => theme.scale.second};
  color: white;
  font-size: ${({ theme }) => theme.scale.base};
  text-decoration: none;
  :last-child {
    margin-left: ${({ theme }) => theme.scale.second};
  }
  padding: 0;
`;

export const EditButton = BaseButton.extend`
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const DeleteButton = BaseButton.withComponent("button").extend`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.scale.first};
  width: ${({ theme }) => theme.scale.fourth};
  height: ${({ theme }) => theme.scale.second};
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.scale.second};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.6;
  transition: opacity 100ms;
  :hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
