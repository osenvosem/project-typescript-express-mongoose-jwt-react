import {
  TUsersFetchRequestedActionCreator,
  TUsersFetchSucceededActionCreator,
  TUsersFetchFailedActionCreator,
  UsersFetchActionTypes
} from "./types";

export const usersFetchRequested: TUsersFetchRequestedActionCreator = () => {
  return {
    type: UsersFetchActionTypes.USERS_FETCH_REQUESTED
  };
};
export const usersFetchSucceeded: TUsersFetchSucceededActionCreator = users => {
  return {
    type: UsersFetchActionTypes.USERS_FETCH_SUCCEEDED,
    users
  };
};
export const usersFetchFailed: TUsersFetchFailedActionCreator = error => {
  return {
    type: UsersFetchActionTypes.USERS_FETCH_FAILED,
    error
  };
};
