const rimraf = require("rimraf");
const config = require("config");

const paths = config.get("buildPaths");

rimraf(`${paths.client}/*.js`, err => {
  if (err) console.error(err);
});

rimraf(`${paths.server}/*.js`, err => {
  if (err) console.error(err);
});
