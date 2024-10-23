const path = require("path");
const common = require("./webpack.config");

const { merge } = require("webpack-merge");
module.exports = merge(common, {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    chunkFilename: "[name].bundle.js",
  },
});
