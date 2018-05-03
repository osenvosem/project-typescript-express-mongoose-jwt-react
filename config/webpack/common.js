const path = require("path");
const globalConfig = require("config");
const publicPath = globalConfig.get("publicPath");

module.exports = {
  module: {
    rules: [
      {
        test: /.(woff2?|ttf|eot|svg)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: publicPath + "fonts/",
            outputPath: "fonts/"
          }
        }
      },
      {
        test: /.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: publicPath + "images/",
            outputPath: "images/"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      Components: path.resolve("src/common/shared/components"),
      styledComponents: path.resolve("src/common/styledComponents.ts")
    }
  }
};
