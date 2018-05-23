import { RouteComponentProps } from "react-router-dom";
import {
  TUser,
  TGlobalState,
  TRemoveLoggedInUserActionCreator
} from "../../../types";

export interface TSingleUserProps
  extends TGlobalState,
    RouteComponentProps<{ id: string }> {
  fetchSingleUserRequested: TFetchSingleUserRequestedActionCreator;
  fetchSingleUserSucceeded: TFetchSingleUserSucceededActionCreator;
  fetchSingleUserFailed: TFetchSingleUserFailedActionCreator;
  removeUser: TRemoveUserActionCreator;
  removeLoggedInUser: TRemoveLoggedInUserActionCreator;
}

export interface TOwnProps extends RouteComponentProps<{ id: string }> {}

export enum fetchSingleUserTypes {
  FETCH_SINGLE_USER_REQUESTED = "FETCH_SINGLE_USER_REQUESTED",
  FETCH_SINGLE_USER_SUCCEEDED = "FETCH_SINGLE_USER_SUCCEEDED",
  FETCH_SINGLE_USER_FAILED = "FETCH_SINGLE_USER_FAILED"
}

export interface TFetchSingleUserRequestedAction {
  type: fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED;
  id: string;
}
export interface TFetchSingleUserSucceededAction {
  type: fetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED;
  user: TUser;
}
export interface TFetchSingleUserFailedAction {
  type: fetchSingleUserTypes.FETCH_SINGLE_USER_FAILED;
  error: Error;
}
export type TFetchSingleUserActions =
  | TFetchSingleUserRequestedAction
  | TFetchSingleUserSucceededAction
  | TFetchSingleUserFailedAction;

export interface TFetchSingleUserRequestedActionCreator {
  (id: string): TFetchSingleUserRequestedAction;
}
export interface TFetchSingleUserSucceededActionCreator {
  (user: TUser): TFetchSingleUserSucceededAction;
}
export interface TFetchSingleUserFailedActionCreator {
  (error: Error): TFetchSingleUserFailedAction;
}

/**
 * REMOVE USER
 */

export enum removeUserTypes {
  REMOVE_USER = "REMOVE_USER"
}

export interface TRemoveUserAction {
  type: removeUserTypes.REMOVE_USER;
  id: string;
}

export interface TRemoveUserActionCreator {
  (id: string): TRemoveUserAction;
}
