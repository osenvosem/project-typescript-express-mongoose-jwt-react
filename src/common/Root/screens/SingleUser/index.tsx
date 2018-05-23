import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  Card,
  FullName,
  Username,
  Email,
  RegisteredSince,
  Buttons,
  EditButton,
  DeleteButton,
  BackButton
} from "./components/styled";
import ArrowBack from "./components/ArrowBack";
import * as actionCreators from "./actionCreators";
import { removeLoggedInUser } from "../../../actionCreators";

import { TSingleUserProps, TOwnProps } from "./types";
import { TGlobalState, TUser } from "../../../types";

class SingleUser extends Component<TSingleUserProps> {
  constructor(props: TSingleUserProps) {
    super(props);

    if (__SERVER__) props.fetchSingleUserRequested(this.props.match.params.id);
  }

  removeUser = () => {
    const {
      history,
      match: {
        params: { id }
      },
      removeUser,
      removeLoggedInUser
    } = this.props;
    removeUser(id);
    removeLoggedInUser();
    history.push("/login");
  };

  render() {
    const {
      users,
      match: {
        params: { id: idUrlParam }
      }
    } = this.props;

    if (!/^[0-9a-fA-F]{24}$/.test(idUrlParam) || !users.length) {
      return <Redirect to="/" />;
    }

    const { firstName, lastName, username, email, createdAt } = users.find(
      user => user._id === idUrlParam
    )!;
    const { _id: loggedInUserId } = this.props.loggedInUser!;

    return (
      <>
        <BackButton to="/">
          <ArrowBack />
          <p>Back</p>
        </BackButton>
        <Card>
          {firstName || lastName ? (
            <>
              <FullName>
                {firstName} {lastName}
              </FullName>
              <Username>@{username}</Username>
            </>
          ) : (
            <FullName>@{username}</FullName>
          )}
          <Email>
            <span>Email:</span> {email}
          </Email>
          <RegisteredSince>
            <span>Registered since: </span>
            {new Date(createdAt).toDateString()}
          </RegisteredSince>
          {loggedInUserId === idUrlParam && (
            <Buttons>
              <EditButton to={`/${idUrlParam}/edit`}>Edit profile</EditButton>
              {/* the "to" attribute is for solving a type issue */}
              <DeleteButton to="" onClick={this.removeUser}>
                Delete account
              </DeleteButton>
            </Buttons>
          )}
        </Card>
      </>
    );
  }
}

export default connect(state => state, {
  ...actionCreators,
  removeLoggedInUser
})(SingleUser);
