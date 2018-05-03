import { Router, RequestHandler } from "express";
import passport from "passport";
import _ from "lodash";
import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";
import mongoose from "mongoose";

import User from "../../models/User";
import { TUser } from "../../models/User/types";
import { TRequestErrorWithStatusCode } from "./types";

const router = Router();

const jwtAuth: RequestHandler = passport.authenticate("jwt", {
  session: false
});

const cookieOptions = {
  httpOnly: true,
  expires: new Date(
    Date.now() + Number.parseInt(config.get("cookies.expires"))
  ),
  signed: true
};

const jwtOptions: SignOptions = { expiresIn: config.get("jwt.expiresIn") };

const validateUserIdParam: RequestHandler = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    const err = new Error("User id is invalid.") as TRequestErrorWithStatusCode;
    err.statusCode = 400;
    return next(err);
  }
  next();
};

router.get("/", jwtAuth, (req, res, next) => {
  User.find()
    .lean()
    .then((rawUsers: TUser[]) => {
      const filteredUsers = User.filterPublicFields(rawUsers);

      res.json(filteredUsers);
    })
    .catch(next);
});

router.get("/:id", jwtAuth, validateUserIdParam, (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .lean()
    .then((rawUser: TUser) => {
      const user = User.filterPublicFields(rawUser);
      res.json(user);
    })
    .catch(next);
});

router.post("/:id/edit", jwtAuth, validateUserIdParam, (req, res, next) => {
  const { id } = req.params;
});

router.post("/registration", (req, res, next) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(rawUser => {
      const user = User.filterPublicFields(rawUser);
      const payload = { id: user._id };

      jwt.sign(payload, config.get("jwt.secret"), jwtOptions, (err, token) => {
        if (err) return next(err);

        res.cookie("access_token", token, cookieOptions);
        res.send(user);
      });
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
  const {
    body: { username, password }
  } = req;

  if (!username || !password) {
    const err = new Error(
      "You must provide username and password."
    ) as TRequestErrorWithStatusCode;
    err.statusCode = 400;
    return next(err);
  }

  User.findOne({ username }, (err, rawUser) => {
    if (err) return next(err);
    if (!rawUser) {
      const err = new Error(
        "Incorrect username or password."
      ) as TRequestErrorWithStatusCode;
      err.statusCode = 400;
      return next(err);
    }

    rawUser
      .checkPassword(password)
      .then(isCorrect => {
        if (!isCorrect) {
          const err = new Error(
            "Password is incorrect"
          ) as TRequestErrorWithStatusCode;
          err.statusCode = 400;
          return next(err);
        }

        const user = User.filterPublicFields(rawUser.toObject());

        jwt.sign(
          { id: user._id },
          config.get("jwt.secret"),
          jwtOptions,
          (err, token) => {
            if (err) return next(err);

            res.cookie("access_token", token, cookieOptions);
            res.json(user);
          }
        );
      })
      .catch(next);
  });
});

router.post("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  delete req.user;
  res.status(200).send("Logged out");
});

export default router;
