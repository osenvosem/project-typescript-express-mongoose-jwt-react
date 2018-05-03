import {
  TAddLoggedInUserActionCreator,
  TRemoveLoggedInUserActionCreator,
  LoggedInUserActionTypes
} from "./types";

export const addLoggedInUser: TAddLoggedInUserActionCreator = user => {
  return {
    type: LoggedInUserActionTypes.ADD_LOGGED_IN_USER,
    payload: user
  };
};

export const removeLoggedInUser: TRemoveLoggedInUserActionCreator = () => {
  return {
    type: LoggedInUserActionTypes.REMOVE_LOGGED_IN_USER
  };
};
