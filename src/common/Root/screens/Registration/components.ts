import styled from "styled-components";
import { Form, Field } from "formik";

export const InputBlock = styled.div``;

export const BlockWrapper = styled.div`
  flex-basis: 100%;
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
