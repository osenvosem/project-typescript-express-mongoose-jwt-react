import mongoose from "mongoose";
import config from "config";

const isDev = process.env.NODE_ENV === "development";

// if (isDev) mongoose.set("debug", true);

mongoose.connect(config.get("dbUrl"));

mongoose.connection.on("error", err => {
  console.error("Connection error: ", err);
});
