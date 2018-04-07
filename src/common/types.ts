import { Types } from "mongoose";

export interface TUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TGlobalState {
  users: TUser[];
  loggedInUser: TUser | null;
}

// action types

export enum ActionTypes {
  ADD_LOGGED_IN_USER = "ADD_AUTHED_USER",
  REMOVE_LOGGED_IN_USER = "REMOVE_AUTHED_USER"
}

export interface TAddLoggedInUserAction {
  type: ActionTypes.ADD_LOGGED_IN_USER;
  payload: TUser;
}

export interface TRemoveLoggedInUserAction {
  type: ActionTypes.REMOVE_LOGGED_IN_USER;
}

export type TActionTypes = TAddLoggedInUserAction | TRemoveLoggedInUserAction;

export interface TAddLoggedInUserActionCreator {
  (user: TUser): TAddLoggedInUserAction;
}

export interface TRemoveLoggedInUserActionCreator {
  (): TRemoveLoggedInUserAction;
}
