import passport from "passport";
import {
  Strategy as JWTStrategy,
  ExtractJwt,
  StrategyOptions
} from "passport-jwt";
import { Application } from "express";
import config from "config";
import pick from "lodash/pick";

import User from "../models/User";

export default (app: Application) => {
  app.use(passport.initialize());

  const options: StrategyOptions = {
    jwtFromRequest(req) {
      let token = null;
      if (req && req.signedCookies) {
        token = req.signedCookies["access_token"];
      }
      return token;
    },
    secretOrKey: config.get("jwt.secret")
  };

  passport.use(
    new JWTStrategy(options, (payload, done) => {
      User.findById(payload.id, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        return done(null, pick(user, User.publicFields));
      });
    })
  );
};
