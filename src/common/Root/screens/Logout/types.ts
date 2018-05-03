import { RouteComponentProps } from "react-router-dom";
import { TUser, TRemoveLoggedInUserActionCreator } from "../../../types";

export interface TLogoutProps extends RouteComponentProps<{}> {
  loggedInUser: TUser;
  removeLoggedInUser: TRemoveLoggedInUserActionCreator;
}
export interface TLogoutState {
  loggedOut: boolean;
}
