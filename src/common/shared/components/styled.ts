import styled from "styledComponents";
import { Field, Form, FieldAttributes } from "formik";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.scale.second};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  padding: 0 0 ${({ theme }) => theme.scale.base} 0;
  margin: 0;
`;

export const ServerErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const BaseButton = styled.button`
  display: block;
  height: 40px;
  width: 150px;
  font-size: ${({ theme }) => theme.scale.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 40px;
  font-weight: 100;
  border: none;
  :disabled {
    opacity: 0.5;
  }
`;

export const SubmitButton = BaseButton.extend``;

export const ErrorMessage = styled.p`
  min-height: 40px;
  max-width: 280px;
  padding: 0 0 0 10px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 6px 20px 6px 0px;
`;

export const Label = styled.label`
  font-style: italic;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 20px;
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface TStyledFieldProps {
  type: string;
  name: string;
  id: string;
}

export const StyledField = styled<TStyledFieldProps>(Field)`
  border: 2px solid ${({ theme }) => theme.colors.quaternary};
  height: 40px;
  width: 300px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.scale.base};
  color: rgba(0, 0, 0, 0.87);
  padding-left: 16px;
`;

export const BottomLink = styled(Link)`
  margin-top: ${({ theme }) => theme.scale.first};
  font-style: italic;
  color: ${({ theme }) => theme.colors.quaternary};
  text-align: center;
  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  align-self: stretch;
`;

export const InputBlock = styled.div``;

export const BlockWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
