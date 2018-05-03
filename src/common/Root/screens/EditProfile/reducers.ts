import { TGlobalState } from "../../../types";
import { TUserFetchActions, userFetchTypes } from "./types";

export default function editPropfileReducer(
  state: TGlobalState,
  action: TUserFetchActions
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
    default:
      return state;
  }
}
