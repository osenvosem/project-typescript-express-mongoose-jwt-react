import { Router } from "express";
import passport from "passport";
import _ from "lodash";
import jwt from "jsonwebtoken";
import config from "config";
import mongoose from "mongoose";

import User from "../models/User";
import { IUserDocument } from "../models/User/interfaces";

const router = Router();

const jwtAuth = passport.authenticate("jwt", { session: false });

const cookieOptions = {
  httpOnly: true,
  expires: new Date(
    Date.now() + Number.parseInt(config.get("cookies.expires"))
  ),
  signed: true
};

const jwtOptions = { expiresIn: config.get("jwt.expiresIn") };

router.get("/", jwtAuth, (req, res, next) => {
  User.find()
    .lean()
    .then(rawUsers => {
      const filteredUsers = (rawUsers as IUserDocument[]).map(rawUser =>
        _.pick(rawUser, User.publicFields)
      );

      res.json(filteredUsers);
    })
    .catch(next);
});

router.get("/:id", jwtAuth, (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return next(new Error("User id isn't valid."));

  User.findById(id)
    .lean()
    .then(rawUser => {
      const user = _.pick(rawUser as IUserDocument, User.publicFields);
      res.json(user);
    })
    .catch(next);
});

router.post("/registration", (req, res, next) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(rawUser => {
      const user = _.pick(rawUser, User.publicFields);
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
  const { body: { username, password } } = req;

  if (!username || !password)
    return next(new Error("You must provide username and password."));

  User.findOne({ username }, (err, rawUser) => {
    if (err) return next(err);
    if (!rawUser) return next(new Error("Incorrect username or password."));

    rawUser
      .checkPassword(password)
      .then(isCorrect => {
        if (!isCorrect) return next(new Error("Password is incorrect"));

        const user = _.pick(rawUser, User.publicFields);

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

export default router;
