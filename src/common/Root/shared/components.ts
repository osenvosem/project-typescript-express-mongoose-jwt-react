import styled from "styled-components";
import { Field } from "formik";

export const Title = styled.h1`
  font-size: 41.8px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  padding: 1rem 0;
`;

export const ServerErrorMessage = styled.p`
  color: ${({ theme }) => theme.secondary};
  text-align: center;
`;

export const SubmitButton = styled.button`
  display: block;
  height: 40px;
  width: 150px;
  background-color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  color: white;
  border-radius: 40px;
  font-weight: 100;
  border: none;
  margin-top: 1rem;
  :disabled {
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.p`
  min-height: 40px;
  max-width: 280px;
  padding: 0 0 0 10px;
  font-style: italic;
  color: ${({ theme }) => theme.secondary};
  margin: 6px 20px 6px 0px;
`;

export const Label = styled.label`
  font-style: italic;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 20px;
  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const StyledField = styled(Field)`
  border: 2px solid ${({ theme }) => theme.quaternary};
  height: 40px;
  width: 300px;
  border-radius: 30px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.87);
  padding-left: 16px;
`;
