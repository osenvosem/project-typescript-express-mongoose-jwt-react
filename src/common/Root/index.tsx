import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styled-components";

import Users from "./screens/Users";

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Users} />
      </Switch>
    );
  }
}

export default hot(module)(Root);
