import { Schema, Model, Document, Types } from "mongoose";

export interface TUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  firstName?: string;
  lastName?: string;
}

export type TUserPublicFields =
  | "_id"
  | "username"
  | "email"
  | "firstName"
  | "lastName"
  | "createdAt"
  | "updatedAt";

export type TUserUpdateFields =
  | "username"
  | "email"
  | "firstName"
  | "lastName"
  | "password";

export interface TUserSchema extends Schema {
  statics: TUserSchemaStatics;
  methods: TUserSchemaMethods;
}

interface TUserSchemaStatics {
  publicFields: TUserPublicFields[];
  updateFields: TUserUpdateFields[];
  filterPublicFields(user: TUser): Pick<TUser, TUserPublicFields>;
  filterPublicFields(users: TUser[]): Pick<TUser, TUserPublicFields>[];

  filterUpdateFields(user: TUser): Pick<TUser, TUserUpdateFields>;
}

export interface TUserSchemaMethods {
  checkPassword: (this: TUserDocument, password: string) => Promise<boolean>;
}

export interface TUserDocument extends TUser, Document, TUserSchemaMethods {
  _id: Types.ObjectId;
}

export interface TUserModel extends Model<TUserDocument>, TUserSchemaStatics {}
