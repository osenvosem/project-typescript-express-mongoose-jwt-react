import { Document, Model, Types } from "mongoose";

export interface IUserDocument extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  checkPassword(this: IUserDocument, password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {
  publicFields: string[];
}
