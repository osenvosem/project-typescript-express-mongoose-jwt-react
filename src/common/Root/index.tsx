import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styled-components";

import UserList from "./screens/UserList";
import SingleUser from "./screens/SingleUser";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

class Root extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={UserList} />
          <Route exact path="/:id" component={SingleUser} />
        </Switch>
      </main>
    );
  }
}

export default hot(module)(Root);
