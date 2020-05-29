"use strict";

const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const phaserConfig = require("./phaser.config");

module.exports = {
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  },
  entry: {
    game: path.resolve(__dirname, "src/app.ts"),
  },
  devtool: "eval-cheap-module-source-map",
  externals: {
    phaser: {
      root: "phaser",
      commonjs2: "phaser",
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
          publicPath: "assets/images",
        },
      },
      {
        test: /\.(ogg|mp3)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/audio",
          publicPath: "assets/audio",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),
      "typeof EXPERIMENTAL": JSON.stringify(false),
      "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
      "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
      "typeof FEATURE_SOUND": JSON.stringify(true),
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "Phaser Game",
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["game"],
      phaserConfig,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defer: ["game"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "src/assets",
        },
      ],
    }),
  ],
};
