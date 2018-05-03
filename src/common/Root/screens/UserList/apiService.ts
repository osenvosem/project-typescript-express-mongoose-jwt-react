import axios from "axios";
import pick from "lodash/pick";

import {
  TUserDocument,
  TUserModel
} from "../../../../server/models/User/types";
import { TUser } from "../../../types";

export const fetchUsers = () => {
  if (__CLIENT__) {
    return axios.get("/api/").then(res => res.data);
  } else if (__SERVER__) {
    const User = require("../../../../server/models/User")
      .default as TUserModel;

    return User.find({}, User.publicFields)
      .lean()
      .then((users: TUser[]) => {
        return users.map(user => {
          user._id = user._id.toString();
          return user;
        });
      });
  }
};
