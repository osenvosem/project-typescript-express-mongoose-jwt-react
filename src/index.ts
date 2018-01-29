import config from "config";
import app from "./server";

app.listen(config.get("port"));
