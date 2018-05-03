import { TFetchUserApiService } from "./types";
import { TUser } from "../../../types";
import { TUserModel } from "../../../../server/models/User/types";

const fetchUserService: TFetchUserApiService = id => {
  if (__SERVER__) {
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

export default fetchUserService;
