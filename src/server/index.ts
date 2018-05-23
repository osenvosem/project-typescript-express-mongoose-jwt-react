import config from "config";
import app from "./server";

console.log(config.get("serverPort"));

app.listen(config.get("serverPort"));
