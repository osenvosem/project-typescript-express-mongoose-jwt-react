import {
  TFetchSingleUserRequestedActionCreator,
  TFetchSingleUserSucceededActionCreator,
  TFetchSingleUserFailedActionCreator,
  TRemoveUserActionCreator,
  fetchSingleUserTypes,
  removeUserTypes
} from "./types";

export const fetchSingleUserRequested: TFetchSingleUserRequestedActionCreator = id => {
  return {
    type: fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED,
    id
  };
};

export const fetchSingleUserSucceeded: TFetchSingleUserSucceededActionCreator = user => {
  return {
    type: fetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED,
    user
  };
};

export const fetchSingleUserFailed: TFetchSingleUserFailedActionCreator = error => {
  return {
    type: fetchSingleUserTypes.FETCH_SINGLE_USER_FAILED,
    error
  };
};

export const removeUser: TRemoveUserActionCreator = id => {
  return {
    type: removeUserTypes.REMOVE_USER,
    id
  };
};
