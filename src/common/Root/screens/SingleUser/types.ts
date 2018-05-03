import { RouteComponentProps } from "react-router-dom";
import { TUser, TGlobalState } from "../../../types";

export interface TSingleUserProps
  extends TGlobalState,
    RouteComponentProps<{ id: string }> {
  fetchSingleUserRequested: TFetchSingleUserRequestedActionCreator;
  fetchSingleUserSucceeded: TFetchSingleUserSucceededActionCreator;
  fetchSingleUserFailed: TFetchSingleUserFailedActionCreator;
}

export interface TOwnProps extends RouteComponentProps<{ id: string }> {}

export enum FetchSingleUserTypes {
  FETCH_SINGLE_USER_REQUESTED = "FETCH_SINGLE_USER_REQUESTED",
  FETCH_SINGLE_USER_SUCCEEDED = "FETCH_SINGLE_USER_SUCCEEDED",
  FETCH_SINGLE_USER_FAILED = "FETCH_SINGLE_USER_FAILED"
}

export interface TFetchSingleUserRequestedAction {
  type: FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED;
  id: string;
}
export interface TFetchSingleUserSucceededAction {
  type: FetchSingleUserTypes.FETCH_SINGLE_USER_SUCCEEDED;
  user: TUser;
}
export interface TFetchSingleUserFailedAction {
  type: FetchSingleUserTypes.FETCH_SINGLE_USER_FAILED;
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
