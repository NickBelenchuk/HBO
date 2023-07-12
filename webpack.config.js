const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    main: path.resolve(__dirname, "src", "js", "main.js"),
    signUp: path.resolve(__dirname, "src", "js", "popUpSignIn.js"),
    singleMovie: path.resolve(__dirname, "src", "js", "singleMovie.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "signUp.html"),
      filename: "./sighUp.html",
      chunks: ["sighUp"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "singleMovie.html"),
      filename: "./singleMovie.html",
      chunks: ["singleMovie"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "image"),
          to: path.resolve(__dirname, "dist", "image"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "group-css-media-queries-loader",
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
