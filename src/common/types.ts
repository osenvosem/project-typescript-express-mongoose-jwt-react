import { Types } from "mongoose";
import { Store } from "redux";
import { Task, END } from "redux-saga";

export interface TUser {
  // not readonly because it supposed to be converted from object to string and reassigned
  _id: string;
  readonly username: string;
  readonly email: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface TGlobalState {
  readonly users: TUser[];
  loggedInUser: TUser | null;
  readonly requestInProgress: boolean;
  readonly error: Error | null;
}

// action types

export enum LoggedInUserActionTypes {
  ADD_LOGGED_IN_USER = "ADD_AUTHED_USER",
  REMOVE_LOGGED_IN_USER = "REMOVE_AUTHED_USER"
}

export interface TAddLoggedInUserAction {
  readonly type: LoggedInUserActionTypes.ADD_LOGGED_IN_USER;
  readonly payload: TUser;
}

export interface TRemoveLoggedInUserAction {
  readonly type: LoggedInUserActionTypes.REMOVE_LOGGED_IN_USER;
}

export type TLoggedInUserActionTypes =
  | TAddLoggedInUserAction
  | TRemoveLoggedInUserAction;

export interface TAddLoggedInUserActionCreator {
  (user: TUser): TAddLoggedInUserAction;
}

export interface TRemoveLoggedInUserActionCreator {
  (): TRemoveLoggedInUserAction;
}

export interface TCustomStore<T> extends Store<T> {
  runSaga: (saga: () => Iterator<any>) => Task;
  close: () => END;
}

export interface TTheme {
  readonly colors: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly quaternary: string;
  };
  readonly scale: {
    readonly sixth: string;
    readonly fifth: string;
    readonly fourth: string;
    readonly third: string;
    readonly second: string;
    readonly first: string;
    readonly base: string;
    readonly mFirst: string;
    readonly mSecond: string;
  };
}
