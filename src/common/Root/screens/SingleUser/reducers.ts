import { TGlobalState } from "../../../types";
import { TFetchSingleUserActions, FetchSingleUserTypes } from "./types";

export default function singleUserReducer(
  state: TGlobalState,
  action: TFetchSingleUserActions
) {
  switch (action.type) {
    case FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED:
      return { ...state, requestInProgress: true };
    case FetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED:
      return {
        ...state,
        users: [...state.users, { ...action.user }],
        requestInProgress: false
      };
    case FetchSingleUserTypes.FETCH_SINGLE_USER_FAILED:
      return { ...state, error: action.error, requestInProgress: false };
    default:
      return state;
  }
}
