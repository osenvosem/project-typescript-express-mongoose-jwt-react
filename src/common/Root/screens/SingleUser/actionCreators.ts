import {
  TFetchSingleUserRequestedActionCreator,
  TFetchSingleUserSucceededActionCreator,
  TFetchSingleUserFailedActionCreator,
  FetchSingleUserTypes
} from "./types";

export const fetchSingleUserRequested: TFetchSingleUserRequestedActionCreator = id => {
  return {
    type: FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED,
    id
  };
};

export const fetchSingleUserSucceeded: TFetchSingleUserSucceededActionCreator = user => {
  return {
    type: FetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED,
    user
  };
};

export const fetchSingleUserFailed: TFetchSingleUserFailedActionCreator = error => {
  return {
    type: FetchSingleUserTypes.FETCH_SINGLE_USER_FAILED,
    error
  };
};
