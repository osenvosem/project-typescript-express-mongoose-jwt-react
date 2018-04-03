import React, { SFC } from "react";
import { Formik, Form, Field, FieldAttributes } from "formik";
import yup from "yup";
import styled, { StyledComponentClass, StyledProps } from "styled-components";

import { TRegistrationProps } from "./types";

const userSchema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(30)
    .required(),
  email: yup
    .string()
    .email()
    .max(60)
    .required(),
  firstName: yup.string().max(30),
  lastName: yup.string().max(30),
  password: yup
    .string()
    .min(6)
    .max(30)
    .required()
});

const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: ""
};

const InputBlock = styled.div`
  margin-bottom: 40px;
`;

const SubmitButton = styled.button``;

const ErrorMessage = styled.p`
  padding: 0;
  font-style: italic;
  color: ${({ theme }) => theme.secondary};
  text-align: right;
  margin: 6px 20px 6px 0px;
`;

const Label = styled.label`
  font-style: italic;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 20px;
`;

const StyledField = styled(Field)`
  border: 2px solid ${({ theme }) => theme.quaternary};
  height: 40px;
  width: 300px;
  border-radius: 30px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.87);
  padding-left: 16px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div:last-child {
    display: none;
  }
`;

const Registration: SFC<TRegistrationProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, formikBag) => {
        console.log(values);
      }}
      render={({ touched, errors, isSubmitting }) => {
        return (
          <StyledForm>
            <InputBlock>
              <Label htmlFor="username">Username</Label>
              <br />
              <StyledField type="text" name="username" id="username" />
              <ErrorMessage>
                {touched.username && errors.username && errors.username}
              </ErrorMessage>
            </InputBlock>
            <InputBlock>
              <Label htmlFor="email">Email:</Label>
              <br />
              <StyledField type="email" name="email" id="email" />
              <ErrorMessage>
                {touched.email && errors.email && errors.email}
              </ErrorMessage>
            </InputBlock>
            <InputBlock>
              <Label htmlFor="firstName">First Name</Label>
              <br />
              <StyledField type="text" name="firstName" id="firstName" />
              <ErrorMessage>
                {touched.lastName && errors.lastName && errors.lastName}
              </ErrorMessage>
            </InputBlock>
            <InputBlock>
              <Label htmlFor="lastName">Last Name</Label>
              <br />
              <StyledField type="text" name="lastName" id="lastName" />
              <ErrorMessage>
                {touched.lastName && errors.lastName && errors.lastName}
              </ErrorMessage>
            </InputBlock>
            <InputBlock>
              <Label htmlFor="password">Password</Label>
              <br />
              <StyledField type="passport" name="password" id="password" />
              <ErrorMessage>
                {touched.password && errors.password && errors.password}
              </ErrorMessage>
            </InputBlock>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </StyledForm>
        );
      }}
    />
  );
};

export default Registration;
