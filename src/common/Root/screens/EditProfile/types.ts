import { RouteComponentProps } from "react-router-dom";

import { TGlobalState, TUser } from "../../../types";

export interface TEditProfileProps
  extends RouteComponentProps<{ id: string }>,
    TGlobalState {
  userFetchRequested: TUserFetchRequestedActionCreator;
}

export enum userFetchTypes {
  USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED",
  USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED",
  USER_FETCH_FAILED = "USER_FETCH_FAILED"
}

export interface TUserFetchRequestedAction {
  type: userFetchTypes.USER_FETCH_REQUESTED;
  id: string;
}
export interface TUserFetchSucceededAction {
  type: userFetchTypes.USER_FETCH_SUCCEEDED;
  user: TUser;
}
export interface TUserFetchFailedAction {
  type: userFetchTypes.USER_FETCH_FAILED;
  error: Error;
}
export type TUserFetchActions =
  | TUserFetchRequestedAction
  | TUserFetchSucceededAction
  | TUserFetchFailedAction;

export interface TUserFetchRequestedActionCreator {
  (id: string): TUserFetchRequestedAction;
}
export interface TUserFetchSucceededActionCreator {
  (user: TUser): TUserFetchSucceededAction;
}
export interface TUserFetchFailedActionCreator {
  (error: Error): TUserFetchFailedAction;
}

export interface TFetchUserApiService {
  (id: string): Promise<TUser | null> | void;
}
