const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const commonWebpackConfig = require("./common");
const globalConfig = require("config");

const isDev = process.env.NODE_ENV === "development";

const buildPaths = globalConfig.get("buildPaths");

const babelOptions = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        },
        modules: false
      }
    ],
    ["@babel/preset-stage-2", { decoratorsLegacy: true }],
    "@babel/preset-react"
  ]
};

const localWebpackConfig = {
  mode: isDev ? "development" : "production",
  entry: {
    server: path.resolve("./src/server/index.ts")
  },
  output: {
    path: path.resolve(buildPaths.server),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelOptions
      }
    ]
  },
  devtool: "source-map",
  target: "node",
  externals: [nodeExternals()],
  watch: isDev,
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true
    })
  ]
};

// don't emit files while bundling the server
commonWebpackConfig.module.rules.forEach(rule => {
  if (rule.use.loader === "file-loader") rule.use.options.emitFile = false;
});

module.exports = merge(commonWebpackConfig, localWebpackConfig);
