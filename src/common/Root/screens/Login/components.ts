import styled from "styledComponents";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
`;

export const InputBlock = styled.div`
  width: 300px;
`;

export const DefaultUserMessage = styled.div`
  margin-top: ${({ theme }) => theme.scale.base};
  padding: ${({ theme }) => theme.scale.base};
  color: rgba(0, 0, 0, 0.38);
  font-weight: 100;
  font-style: italic;
  text-align: center;
  > span {
    font-weight: bold;
  }
`;
