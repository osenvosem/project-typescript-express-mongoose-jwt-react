import mongoose, { HookSyncCallback } from "mongoose";
import crypto from "crypto";
import config from "config";
import { TUserDocument, TUserModel, TCheckPassword } from "./types";

const userSchema = new mongoose.Schema({
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
    require: true,
    minlength: 6,
    maxlength: 30
  },
  salt: {
    type: String
  }
});

userSchema.set("timestamps", true);

userSchema.statics.publicFields = [
  "_id",
  "username",
  "firstName",
  "lastName",
  "email",
  "createdAt",
  "updatedAt"
];

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
} as TCheckPassword<TUserDocument>;

export default mongoose.model<TUserDocument, TUserModel>("User", userSchema);
