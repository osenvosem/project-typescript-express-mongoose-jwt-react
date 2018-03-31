import {
  Document,
  Model,
  Types,
  HookSyncCallback,
  HookNextFunction
} from "mongoose";

export interface TUserDocument extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  checkPassword(this: TUserDocument, password: string): Promise<boolean>;
}

export interface TUserModel extends Model<TUserDocument> {
  publicFields: string[];
}

export interface TCheckPassword<T extends Document> {
  (this: T, password: string): Promise<boolean>;
}
