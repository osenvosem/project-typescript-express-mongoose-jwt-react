import { Location } from "history";
import { TUser } from "../../../types";

export interface THeaderProps {
  loggedInUser: TUser;
  location: Location;
}
