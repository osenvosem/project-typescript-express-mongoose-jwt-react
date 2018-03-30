import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styled-components";

class Root extends Component {
  render() {
    return <div>Root component</div>;
  }
}

export default hot(module)(Root);
