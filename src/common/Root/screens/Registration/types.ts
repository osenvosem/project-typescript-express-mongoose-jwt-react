import { RouteComponentProps } from "react-router-dom";
import { TUser, TAddLoggedInUserActionCreator } from "../../../types";

export interface TRegistrationProps extends RouteComponentProps<{}> {
  loggedInUser: TUser | null;
  addLoggedInUser: TAddLoggedInUserActionCreator;
}
