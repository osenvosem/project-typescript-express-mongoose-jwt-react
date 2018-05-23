import { TGlobalState } from "../../../types";
import {
  TFetchSingleUserActions,
  TRemoveUserAction,
  fetchSingleUserTypes,
  removeUserTypes
} from "./types";

export default function singleUserReducer(
  state: TGlobalState,
  action: TFetchSingleUserActions | TRemoveUserAction
) {
  switch (action.type) {
    case fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED:
      return { ...state, requestInProgress: true };
    case fetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED:
      return {
        ...state,
        users: [...state.users, { ...action.user }],
        requestInProgress: false
      };
    case fetchSingleUserTypes.FETCH_SINGLE_USER_FAILED:
      return { ...state, error: action.error, requestInProgress: false };

    case removeUserTypes.REMOVE_USER:
      const { users } = state;
      const idx = users.findIndex(user => user._id === action.id);
      return {
        ...state,
        users: [...users.slice(0, idx), ...users.slice(idx + 1)]
      };

    default:
      return state;
  }
}
