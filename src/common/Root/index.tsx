import React, { SFC } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styledComponents";
import { connect } from "react-redux";
import axios from "axios";
import { rgba } from "polished";

import UserList from "./screens/UserList";
import SingleUser from "./screens/SingleUser";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Logout from "./screens/Logout";
import EditProfile from "./screens/EditProfile";
import theme from "../theme";
import Header from "./components/Header";

import { TGlobalState } from "../types";
import { TRootProps, TMainProps } from "./types";

const Main = styled<TMainProps, "main">("main")`
padding-top: ${({ theme }) => theme.scale.second}
  flex-grow: 1;
  background-color: ${({ theme, location }) => {
    return !["/login", "/registration"].includes(location.pathname)
      ? rgba(theme.colors.quaternary, 0.12)
      : "white";
  }};
  border-top: 1px solid transparent;
`;

const MainInner = styled.div`
  max-width: 630px;
  margin: 0 auto;
`;

const Root: SFC<TRootProps> = props => (
  <ThemeProvider theme={theme}>
    <>
      <Header loggedInUser={props.loggedInUser} location={props.location} />
      <Main location={props.location}>
        <MainInner>
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={UserList} />
            <Route exact path="/:id" component={SingleUser} />
            <Route exact path="/:id/edit" component={EditProfile} />
            <Route render={props => <h2>404 Not Found</h2>} />
          </Switch>
        </MainInner>
      </Main>
    </>
  </ThemeProvider>
);

function mapStateToProps(state: TGlobalState) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default hot(module)(withRouter(connect(mapStateToProps)(Root)));
