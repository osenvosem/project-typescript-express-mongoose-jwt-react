import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actionCreators from "./actionCreators";
import { Card, FullName, Username } from "./components/styled";
import IsLoggedInUser from "./components/IsLoggedInUser";

import { TUserListProps } from "./types";

class UserList extends Component<TUserListProps> {
  constructor(props: TUserListProps) {
    super(props);
    if (this.props.loggedInUser) this.props.usersFetchRequested();
  }

  render() {
    if (this.props.loggedInUser) {
      const { loggedInUser, users } = this.props;
      const loggedInUserId = loggedInUser._id;

      return users.map(user => {
        const { firstName, lastName, username } = user;
        let userId = user._id;
        return (
          <Card key={userId} to={`/${userId}`}>
            {firstName || lastName ? (
              <>
                <FullName bold={loggedInUserId === userId}>
                  {firstName} {lastName}
                  <IsLoggedInUser
                    loggedInUserId={loggedInUserId}
                    userId={userId}
                  />
                </FullName>
                <Username>@{username}</Username>
              </>
            ) : (
              <FullName bold={loggedInUserId === userId}>
                @{username}
                <IsLoggedInUser
                  loggedInUserId={loggedInUserId}
                  userId={userId}
                />
              </FullName>
            )}
          </Card>
        );
      });
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default connect(state => state, actionCreators)(UserList);
