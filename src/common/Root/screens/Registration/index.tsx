import React, { SFC } from "react";
import { Formik, FormikActions, FormikValues } from "formik";
import yup from "yup";
import styled from "styledComponents";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  SubmitButton,
  ErrorMessage,
  Label,
  StyledField,
  Title,
  ServerErrorMessage,
  BottomLink,
  InputBlock,
  BlockWrapper,
  StyledForm
} from "Components/styled";
import validationSchema from "./validationSchema";
import { addLoggedInUser } from "../../../actionCreators";

import { TGlobalState } from "../../../types";
import { TRegistrationProps } from "./types";

const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  serverErrorMessage: ""
};

function onSubmit(
  props: TRegistrationProps,
  values: FormikValues,
  formikBag: FormikActions<FormikValues>
) {
  formikBag.setSubmitting(true);
  axios
    .post("/api/registration", values)
    .then(res => {
      formikBag.setSubmitting(false);
      props.addLoggedInUser(res.data);
      props.history.replace("/");
    })
    .catch(err => {
      formikBag.setSubmitting(false);
      formikBag.setErrors({ serverErrorMessage: err.response.data });
    });
}

const Registration: SFC<TRegistrationProps> = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit.bind(null, props)}
      render={({ touched, errors, isSubmitting }) => {
        return props.loggedInUser ? (
          <Redirect to="/" />
        ) : (
          <>
            <Title> Registration </Title>
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
                <Label htmlFor="email">
                  Email <span>*</span>
                </Label>
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
                  {touched.firstName && errors.firstName && errors.firstName}
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
              <BlockWrapper>
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
              </BlockWrapper>
              <BlockWrapper>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Submit
                </SubmitButton>
              </BlockWrapper>
              <BlockWrapper>
                <BottomLink to="/login">
                  …or log in if you have an account.
                </BottomLink>
              </BlockWrapper>
            </StyledForm>
          </>
        );
      }}
    />
  );
};

function mapStateToProps(state: TGlobalState) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, { addLoggedInUser })(Registration);
