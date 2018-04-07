import { Action } from "redux";
import { TGlobalState, TUser, ActionTypes, TActionTypes } from "./types";

export default function rootReducer(state: TGlobalState, action: TActionTypes) {
  switch (action.type) {
    case ActionTypes.ADD_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    case ActionTypes.REMOVE_LOGGED_IN_USER:
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
}
