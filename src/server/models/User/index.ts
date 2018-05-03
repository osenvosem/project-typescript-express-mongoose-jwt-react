import mongoose, {
  HookSyncCallback,
  Types,
  Schema,
  Model,
  Document
} from "mongoose";
import crypto from "crypto";
import config from "config";

import {
  TUserDocument,
  TUserModel,
  TUserSchema,
  TUser,
  TUserPublicFields,
  TUserUpdateFields
} from "./types";

const userSchema: TUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
    lowercase: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 60,
    trim: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: 30
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30
  },
  salt: {
    type: String
  }
});

userSchema.set("timestamps", true);

userSchema.statics = {
  publicFields: [
    "_id",
    "username",
    "firstName",
    "lastName",
    "email",
    "createdAt",
    "updatedAt"
  ],

  updateFields: ["username", "firstName", "lastName", "email", "password"],

  filterPublicFields(userOrUsers: any): any {
    if (Array.isArray(userOrUsers)) {
      return userOrUsers.map(rawUser => {
        return this.publicFields.reduce(
          (acc, field) => {
            acc[field] = rawUser[field];
            return acc;
          },
          {} as Pick<TUser, TUserPublicFields>
        );
      });
    } else {
      return userSchema.statics.publicFields.reduce(
        (acc, field) => {
          acc[field] = userOrUsers[field];
          return acc;
        },
        {} as Pick<TUser, TUserPublicFields>
      );
    }
  },

  filterUpdateFields(user) {
    return userSchema.statics.updateFields.reduce(
      (acc, field) => {
        acc[field] = user[field];
        return acc;
      },
      {} as Pick<TUser, TUserUpdateFields>
    );
  }
};

const { length, iterations, algorithm } = config.get("crypto");

userSchema.pre<TUserDocument>("save", function(next) {
  crypto.randomBytes(length, (err, randB) => {
    if (err) return next(err);

    const salt = (this.salt = randB.toString("base64"));

    crypto.pbkdf2(
      this.password,
      salt,
      iterations,
      length,
      algorithm,
      (err, derivedKey) => {
        if (err) return next(err);
        this.password = derivedKey.toString("base64");
        next();
      }
    );
  });
});

userSchema.methods.checkPassword = function(password: string) {
  return new Promise((resolve, reject) => {
    password = password.trim();
    if (!password)
      return reject(new Error("You must provide a password to check."));

    crypto.pbkdf2(
      password,
      this.salt,
      iterations,
      length,
      algorithm,
      (err, derivedKey) => {
        if (err) return reject(err);
        resolve(this.password === derivedKey.toString("base64"));
      }
    );
  });
};

export default mongoose.model<TUserDocument, TUserModel>("User", userSchema);
