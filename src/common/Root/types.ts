import { RouteComponentProps } from "react-router-dom";
import { Location } from "history";
import { ThemeProps } from "styledComponents";

import { TUser, TTheme } from "../types";

export interface TRootProps extends RouteComponentProps<{ id: string }> {
  loggedInUser: TUser;
}

export interface TMainProps {
  readonly location: Location;
  readonly theme?: TTheme;
}
