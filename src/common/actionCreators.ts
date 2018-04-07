import {
  TAddLoggedInUserActionCreator,
  TRemoveLoggedInUserActionCreator,
  ActionTypes
} from "./types";

export const addLoggedInUser: TAddLoggedInUserActionCreator = user => {
  return {
    type: ActionTypes.ADD_LOGGED_IN_USER,
    payload: user
  };
};

export const removeLoggedInUser: TRemoveLoggedInUserActionCreator = () => {
  return {
    type: ActionTypes.REMOVE_LOGGED_IN_USER
  };
};
