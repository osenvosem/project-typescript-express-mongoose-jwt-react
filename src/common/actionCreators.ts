import {
  TAddLoggedInUserActionCreator,
  TRemoveLoggedInUserActionCreator,
  loggedInUserTypes
} from "./types";

export const addLoggedInUser: TAddLoggedInUserActionCreator = user => {
  return {
    type: loggedInUserTypes.ADD_LOGGED_IN_USER,
    user
  };
};

export const removeLoggedInUser: TRemoveLoggedInUserActionCreator = () => {
  return {
    type: loggedInUserTypes.REMOVE_LOGGED_IN_USER
  };
};
