const port = process.env.PORT || 8080;
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // entry: {                                 //for multipe entry point
  //   main: "./src/index.js",
  // },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    chunkFilename: "[name].bundle.[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", //inject into dom
          "css-loader", // css - main js bundle
          // "sass-loader", // convert into  sass to css
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  // optimization: {
  //   minimizer: [

  //   ],
  // },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "images" }],
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
