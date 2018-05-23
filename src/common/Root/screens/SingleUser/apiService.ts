import axios from "axios";

import { TUser } from "../../../types";
import { TUserModel } from "../../../../server/models/User/types";

export const fetchSingleUser = (id: string) => {
  if (__CLIENT__) {
    return axios.get<TUser>(`/api/${id}`).then(res => {
      return res.data;
    });
  } else if (__SERVER__) {
    const User = require("../../../../server/models/User")
      .default as TUserModel;

    return User.findById(id, User.publicFields)
      .lean()
      .then((user: TUser) => {
        user._id = user._id.toString();
        return user;
      });
  }
};

export const removeUser = (id: string) => {
  return axios.delete(`/api/delete/${id}`);
};
