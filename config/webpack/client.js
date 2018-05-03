const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const globalConfig = require("config");

const commonWebpackConfig = { ...require("./common") };

const buildPaths = globalConfig.get("buildPaths");

const publicPath = globalConfig.get("publicPath");
const isDev = process.env.NODE_ENV === "development";

const babelOptions = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [">0.25%", "not ie 11", "not op_mini all"]
        },
        useBuiltIns: "usage",
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
    main: ["./src/client.tsx"]
  },
  output: {
    path: path.resolve(buildPaths.client),
    publicPath,
    filename: isDev ? "[name].bundle.js" : "[name].[chunkhash].js",
    chunkFilename: isDev ? "[name].chunk.js" : "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelOptions
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    })
  ]
};

if (isDev) {
  localWebpackConfig.entry.main.unshift(
    `webpack-dev-server/client?http://localhost:${globalConfig.wdsPort}/`,
    "webpack/hot/dev-server"
  );
  localWebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  localWebpackConfig.devServer = {
    publicPath,
    port: globalConfig.wdsPort,
    hot: true,
    overlay: true,
    proxy: {
      [`!**${publicPath}*`]: `http://localhost:${globalConfig.serverPort}`,
      proxyTimeout: 1000 * 60 * 5
    },
    quiet: true
  };
}

module.exports = merge(commonWebpackConfig, localWebpackConfig);
