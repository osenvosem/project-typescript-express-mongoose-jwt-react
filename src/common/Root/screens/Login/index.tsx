import React, { SFC } from "react";
import { Formik, FormikValues, FormikActions } from "formik";

import { TLoginProps } from "./types";

import { Title, ServerErrorMessage } from "components";
import { StyledForm } from "./components";
import validationSchema from "./validationSchema";

const initialValues = {
  username: "",
  password: "",
  serverErrorMessage: ""
};

function onSubmit(
  values: FormikValues,
  formikBag: FormikActions<FormikValues>
) {}

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
        <StyledForm />
      </>
    )}
  />
);

export default Login;
