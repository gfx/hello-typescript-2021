"use strict";

const isProduction = process.env.NODE_ENV === "production";
const assetDir = "assets";

const config = {
  mode: isProduction ? "production" : "development",

  entry: {
    application: [
      "core-js",
      "./src/index.ts",
    ],
  },
  target: ["web", "es2021"],
  output: {
    publicPath: `/${assetDir}/`,
    path: `${__dirname}/public/${assetDir}`,

    filename: isProduction ? "[name]-[chunkhash].js" : "[name].js",
  },

  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
          transpileOnly: !isProduction,
        },
      },
    ],
  },

  optimization: {
    minimize: isProduction,
  },
  devtool: "source-map",
};

module.exports = config;
