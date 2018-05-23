import {
  userFetchTypes,
  userUpdateTypes,
  TUserFetchRequestedActionCreator,
  TUserFetchSucceededActionCreator,
  TUserFetchFailedActionCreator,
  TUserUpdateSucceededActionCreator
} from "./types";

export const userFetchRequested: TUserFetchRequestedActionCreator = id => {
  return {
    type: userFetchTypes.USER_FETCH_REQUESTED,
    id
  };
};

export const userFetchSucceeded: TUserFetchSucceededActionCreator = user => {
  return {
    type: userFetchTypes.USER_FETCH_SUCCEEDED,
    user
  };
};

export const userFetchFailed: TUserFetchFailedActionCreator = error => {
  return {
    type: userFetchTypes.USER_FETCH_FAILED,
    error
  };
};

export const userUpdateSucceeded: TUserUpdateSucceededActionCreator = user => {
  return {
    type: userUpdateTypes.USER_UPDATE_SUCCEEDED,
    user
  };
};
