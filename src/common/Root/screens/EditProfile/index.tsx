import React, { SFC } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Formik, FormikValues, FormikActions } from "formik";
import { Redirect } from "react-router-dom";
import axios from "axios";

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
import { CancelButton } from "./components/styled";
import validationSchema from "./validationSchema";
import { userFetchRequested } from "./actionCreators";

import { TEditProfileProps, userFetchTypes } from "./types";

function onSubmit(
  props: TEditProfileProps,
  values: FormikValues,
  actions: FormikActions<FormikValues>
) {
  actions.setSubmitting(true);
  axios
    .post(`/api/${props.match.params.id}/edit`, values)
    .then(res => {
      actions.setSubmitting(false);
      console.log(res.data);
    })
    .catch(err => {
      actions.setSubmitting(false);
      actions.setErrors({ serverErrorMessage: err.response.data });
    });
}

const EditProfile: SFC<TEditProfileProps> = props => {
  const { id: idUrlParam } = props.match.params;
  if (!props.users.length) props.userFetchRequested(idUrlParam);

  const initialValues = {
    serverErrorMessage: null,
    password: "",
    ...props.loggedInUser!
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit.bind(null, props)}
      render={({ errors, touched, isSubmitting }) => {
        return !props.loggedInUser ? (
          <Redirect to="/login" />
        ) : (
          <>
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
                <CancelButton
                  onClick={() => {
                    props.history.goBack();
                  }}
                >
                  Cancel
                </CancelButton>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Submit
                </SubmitButton>
              </BlockWrapper>
            </StyledForm>
          </>
        );
      }}
    />
  );
};

function mapDispatchToProps(
  dispatch: Dispatch<{ type: userFetchTypes.USER_FETCH_REQUESTED }>
) {
  return bindActionCreators({ userFetchRequested }, dispatch);
}

export default connect(state => state, mapDispatchToProps)(EditProfile);
