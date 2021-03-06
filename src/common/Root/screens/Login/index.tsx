import React, { SFC } from "react";
import { Formik, FormikValues, FormikActions } from "formik";
import axios, { AxiosError } from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  Title,
  ServerErrorMessage,
  StyledField,
  ErrorMessage,
  Label,
  SubmitButton,
  BottomLink
} from "Components/styled";

import { InputBlock, StyledForm, DefaultUserMessage } from "./components";
import validationSchema from "./validationSchema";
import * as actionCreators from "../../../actionCreators";

import { TLoginProps } from "./types";
import { TGlobalState } from "../../../types";

let initialValues = {
  username: "",
  password: "",
  serverErrorMessage: ""
};

if (__CLIENT__ && !localStorage.notFirstVisit) {
  initialValues = {
    username: "elon",
    password: "123123",
    serverErrorMessage: ""
  };
  localStorage.setItem("notFirstVisit", "1");
}

function onSubmit(
  props: TLoginProps,
  values: FormikValues,
  formikBag: FormikActions<FormikValues>
) {
  formikBag.setSubmitting(true);
  delete values.serverErrorMessage;
  axios
    .post("/api/login", values)
    .then(res => {
      formikBag.setSubmitting(false);
      props.addLoggedInUser(res.data);
      props.history.replace("/");
    })
    .catch((err: AxiosError) => {
      formikBag.setSubmitting(false);
      formikBag.setErrors({ serverErrorMessage: err!.response!.data });
    });
}

const Login: SFC<TLoginProps> = props => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit.bind(null, props)}
    render={({ touched, errors, isSubmitting }) => {
      return props.loggedInUser ? (
        <Redirect to="/" />
      ) : (
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
            <BottomLink to="/registration">
              ...or register a new account if you don't have one.
            </BottomLink>
            <DefaultUserMessage>
              The default profile username is <span>elon</span> and the password
              is <span>123123</span>
            </DefaultUserMessage>
          </StyledForm>
        </>
      );
    }}
  />
);

function mapStateToProps(state: TGlobalState) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, actionCreators)(Login);
