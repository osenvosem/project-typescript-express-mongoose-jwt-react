import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { removeLoggedInUser } from "../../../actionCreators";

import { TLogoutProps, TLogoutState } from "./types";
import { TGlobalState, TRemoveLoggedInUserAction } from "../../../types";

class Logout extends Component<TLogoutProps, TLogoutState> {
  state: TLogoutState = { loggedOut: false };

  componentDidMount() {
    axios
      .post("/api/logout")
      .then(() => {
        this.props.removeLoggedInUser();
        this.setState({ loggedOut: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return this.state.loggedOut ? <Redirect to="/login" /> : "Redirecting...";
  }
}

function mapStateToProps(state: TGlobalState) {
  return {
    loggedInUser: state.loggedInUser
  };
}

function mapDispatchToProps(dispatch: Dispatch<TRemoveLoggedInUserAction>) {
  return bindActionCreators({ removeLoggedInUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
