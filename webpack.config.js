const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Home Page",
      filename: "index.html", //output
      template: "./src/views/home.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Home Page",
      filename: "about.html", //output
      template: "./src/views/about.html",  //input
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "Regiter",
      filename: "register.html", //output
      template: "./src/views/register.html",  //input
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "Login",
      filename: "login.html", //output
      template: "./src/views/login.html",  //input
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      // Images loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    compress: true,
    liveReload: true,
    hot: true,
    port: 9000,
  },
};
