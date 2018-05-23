import { TGlobalState } from "../../../types";
import {
  TUserFetchActions,
  TUserUpdateSucceededAction,
  userFetchTypes,
  userUpdateTypes
} from "./types";

export default function editPropfileReducer(
  state: TGlobalState,
  action: TUserFetchActions | TUserUpdateSucceededAction
) {
  switch (action.type) {
    case userFetchTypes.USER_FETCH_REQUESTED:
      return { ...state, requestInProgress: true };
    case userFetchTypes.USER_FETCH_SUCCEEDED:
      return {
        ...state,
        requestInProgress: false,
        users: [...state.users, action.user]
      };
    case userFetchTypes.USER_FETCH_FAILED:
      return { ...state, requestInProgress: false, error: action.error };
    case userUpdateTypes.USER_UPDATE_SUCCEEDED:
      const { users } = state;
      let idx = users.findIndex(user => user._id === action.user._id);
      return {
        ...state,
        requestInProgress: false,
        users: [...users.slice(0, idx), action.user, ...users.slice(++idx)],
        loggedInUser: action.user
      };
    default:
      return state;
  }
}
