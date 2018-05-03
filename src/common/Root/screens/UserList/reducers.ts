import { UsersFetchActionTypes, TUsersFetchActions } from "./types";
import { TGlobalState } from "../../../types";

export default function userList(
  state: TGlobalState,
  action: TUsersFetchActions
) {
  switch (action.type) {
    case UsersFetchActionTypes.USERS_FETCH_REQUESTED:
      return { ...state, requestInProgress: true };
    case UsersFetchActionTypes.USERS_FETCH_SUCCEEDED:
      return { ...state, users: action.users, requestInProgress: false };
    case UsersFetchActionTypes.USERS_FETCH_FAILED:
      return { ...state, error: action.error, requestInProgress: false };
    default:
      return state;
  }
}
