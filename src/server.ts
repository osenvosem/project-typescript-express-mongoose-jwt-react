import path from "path";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import serveFavicon from "serve-favicon";
import config from "config";

import configureLibs from "./libConfig";
import APIv1 from "./routes";

const app = express();

app.use(serveFavicon(path.resolve("./public/favicon.ico")));
app.use("/assets", express.static("public"));
app.use(cookieParser(config.get("cookies.secret")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
configureLibs(app);

app.use("/api/v1", APIv1);

export default app;
