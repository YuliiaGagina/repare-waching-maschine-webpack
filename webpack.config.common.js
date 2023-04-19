const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },

      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   test: /\.svg/,
      //   type: "asset/inline",
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      //   type: "javascript/auto",
      // },

      // {
      //   test: /\.svg$/,
      //   use: "svg-sprite-loader",
      // },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            // iesafe: true,
          },
        },
      },
    ],
  },
  devServer: {
    open: true,
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
