import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styled-components";

import UserList from "./screens/UserList";
import SingleUser from "./screens/SingleUser";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

const theme = {
  primary: "#58CDF7",
  secondary: "#FD739F",
  tertiary: "#84F4E1",
  quaternary: "#D3C4D1"
};

const Main = styled.main`
  max-width: 630px;
  margin: 0 auto;
`;

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={UserList} />
            <Route path="/:id" component={SingleUser} />
            <Route render={props => <h2>404 Not Found</h2>} />
          </Switch>
        </Main>
      </ThemeProvider>
    );
  }
}

export default hot(module)(Root);
