const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const WebpackBar = require('webpackbar');
const port = 9000;

version = "0.0.1";

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".d.ts"],
  },
  output: {
    filename: `out.js`,
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
  ],
  stats: "errors-only",
  devServer: {
    port: port,
  },
};
