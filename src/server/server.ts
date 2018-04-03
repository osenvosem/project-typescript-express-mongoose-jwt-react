import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import serveFavicon from "serve-favicon";
import config from "config";
import express, { ErrorRequestHandler } from "express";

import configureLibs from "./libConfig";
import { usersApi, ssr } from "./routes";

const app = express();

app.disable("x-powered-by");

if (process.env.NODE_ENV === "production") {
  app.use("/assets/", express.static("public"));
}

app.use(serveFavicon(path.resolve("./public/favicon.ico")));
app.use("/assets", express.static("public"));
app.use(cookieParser(config.get("cookies.secret")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
configureLibs(app);

app.use("/api/", usersApi);
app.use("/*", ssr);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
};
app.use(errorHandler);

export default app;
