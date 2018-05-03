import { TUser } from "../../../types";
import { RouteComponentProps } from "react-router-dom";
import { TGlobalState } from "../../../types";

export interface TUserListProps extends TGlobalState, RouteComponentProps<{}> {
  readonly usersFetchRequested: TUsersFetchRequestedActionCreator;
  readonly usersFetchSucceeded: TUsersFetchSucceededActionCreator;
  readonly usersFetchFailed: TUsersFetchFailedActionCreator;
}

export enum UsersFetchActionTypes {
  USERS_FETCH_REQUESTED = "USERS_FETCH_REQUESTED",
  USERS_FETCH_SUCCEEDED = "USERS_FETCH_SUCCEEDED",
  USERS_FETCH_FAILED = "USERS_FETCH_FAILED"
}

export interface TUsersFetchRequestedAction {
  readonly type: UsersFetchActionTypes.USERS_FETCH_REQUESTED;
}
export interface TUsersFetchSucceededAction {
  readonly type: UsersFetchActionTypes.USERS_FETCH_SUCCEEDED;
  readonly users: TUser[];
}
export interface TUsersFetchFailedAction {
  readonly type: UsersFetchActionTypes.USERS_FETCH_FAILED;
  readonly error: Error;
}
export type TUsersFetchActions =
  | TUsersFetchRequestedAction
  | TUsersFetchSucceededAction
  | TUsersFetchFailedAction;

export interface TUsersFetchRequestedActionCreator {
  (): TUsersFetchRequestedAction;
}
export interface TUsersFetchSucceededActionCreator {
  (users: TUser[]): TUsersFetchSucceededAction;
}
export interface TUsersFetchFailedActionCreator {
  (err: Error): TUsersFetchFailedAction;
}
