import userListReducer from "./Root/screens/UserList/reducers";
import singleUserReducer from "./Root/screens/SingleUser/reducers";
import editProfileReducer from "./Root/screens/EditProfile/reducers";

import {
  TUsersFetchActions,
  UsersFetchActionTypes
} from "./Root/screens/UserList/types";
import {
  TGlobalState,
  TUser,
  loggedInUserTypes,
  TLoggedInUserActionTypes
} from "./types";
import {
  fetchSingleUserTypes,
  TFetchSingleUserActions
} from "./Root/screens/SingleUser/types";
import {
  TUserUpdateSucceededAction,
  userUpdateTypes
} from "./Root/screens/EditProfile/types";

type ActionTypes =
  | TLoggedInUserActionTypes
  | TUsersFetchActions
  | TFetchSingleUserActions
  | TUserUpdateSucceededAction;

export default function rootReducer(state: TGlobalState, action: ActionTypes) {
  switch (action.type) {
    case loggedInUserTypes.ADD_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.user };
    case loggedInUserTypes.REMOVE_LOGGED_IN_USER:
      return { ...state, loggedInUser: null };

    case UsersFetchActionTypes.USERS_FETCH_REQUESTED:
    case UsersFetchActionTypes.USERS_FETCH_SUCCEEDED:
    case UsersFetchActionTypes.USERS_FETCH_FAILED:
      return userListReducer(state, action);

    case fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED:
    case fetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED:
    case fetchSingleUserTypes.FETCH_SINGLE_USER_FAILED:
      return singleUserReducer(state, action);

    case userUpdateTypes.USER_UPDATE_SUCCEEDED:
      return editProfileReducer(state, action);

    default:
      return state;
  }
}
