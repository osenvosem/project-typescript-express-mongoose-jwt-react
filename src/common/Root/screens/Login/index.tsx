import React, { SFC } from "react";
import { Formik, FormikValues, FormikActions } from "formik";
import axios from "axios";

import { TLoginProps } from "./types";

import {
  Title,
  ServerErrorMessage,
  StyledField,
  ErrorMessage,
  Label,
  SubmitButton
} from "components";
import { InputBlock, StyledForm } from "./components";
import validationSchema from "./validationSchema";

const initialValues = {
  username: "",
  password: "",
  serverErrorMessage: ""
};

function onSubmit(
  values: FormikValues,
  formikBag: FormikActions<FormikValues>
) {
  formikBag.setSubmitting(true);
  delete values.serverErrorMessage;
  axios
    .post("/api/login", values, { withCredentials: true })
    .then(res => {
      formikBag.setSubmitting(false);
      // set the logged in user to store
      // redirect
    })
    .catch(err => {
      formikBag.setSubmitting(false);
      formikBag.setErrors({ serverErrorMessage: err.response.data });
    });
}

const Login: SFC<TLoginProps> = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    render={({ touched, errors, isSubmitting }) => (
      <>
        <Title>Login</Title>
        {errors.serverErrorMessage && (
          <ServerErrorMessage>
            Server error: {errors.serverErrorMessage}
          </ServerErrorMessage>
        )}
        <StyledForm>
          <InputBlock>
            <Label htmlFor="username">
              Username <span>*</span>
            </Label>
            <br />
            <StyledField type="text" name="username" id="username" />
            <ErrorMessage>
              {touched.username && errors.username && errors.username}
            </ErrorMessage>
          </InputBlock>
          <InputBlock>
            <Label htmlFor="password">
              Password <span>*</span>
            </Label>
            <br />
            <StyledField type="password" name="password" id="password" />
            <ErrorMessage>
              {touched.password && errors.password && errors.password}
            </ErrorMessage>
          </InputBlock>
          <SubmitButton>Log in</SubmitButton>
        </StyledForm>
      </>
    )}
  />
);

export default Login;
