import userListReducer from "./Root/screens/UserList/reducers";
import singleUserReducer from "./Root/screens/SingleUser/reducers";

import {
  TUsersFetchActions,
  UsersFetchActionTypes
} from "./Root/screens/UserList/types";
import {
  TGlobalState,
  TUser,
  LoggedInUserActionTypes,
  TLoggedInUserActionTypes
} from "./types";
import {
  FetchSingleUserTypes,
  TFetchSingleUserActions
} from "./Root/screens/SingleUser/types";

type ActionTypes =
  | TLoggedInUserActionTypes
  | TUsersFetchActions
  | TFetchSingleUserActions;

export default function rootReducer(state: TGlobalState, action: ActionTypes) {
  switch (action.type) {
    case LoggedInUserActionTypes.ADD_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    case LoggedInUserActionTypes.REMOVE_LOGGED_IN_USER:
      return { ...state, loggedInUser: null };

    case UsersFetchActionTypes.USERS_FETCH_REQUESTED:
    case UsersFetchActionTypes.USERS_FETCH_SUCCEEDED:
    case UsersFetchActionTypes.USERS_FETCH_FAILED:
      return userListReducer(state, action);

    case FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED:
    case FetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED:
    case FetchSingleUserTypes.FETCH_SINGLE_USER_FAILED:
      return singleUserReducer(state, action);

    default:
      return state;
  }
}
