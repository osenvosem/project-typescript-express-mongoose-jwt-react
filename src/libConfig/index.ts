import "./mongoose";
import configurePassport from "./passport";
import { Application } from "express";

export default (app: Application) => {
  configurePassport(app);
};
