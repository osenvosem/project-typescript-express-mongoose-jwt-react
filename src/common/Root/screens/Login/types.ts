import { RouteComponentProps } from "react-router-dom";
import {
  TAddLoggedInUserActionCreator,
  TRemoveLoggedInUserActionCreator,
  TGlobalState
} from "../../../types";

export interface TLoginProps extends RouteComponentProps<{}>, TGlobalState {
  addLoggedInUser: TAddLoggedInUserActionCreator;
  removeLoggedInUser: TRemoveLoggedInUserActionCreator;
}
