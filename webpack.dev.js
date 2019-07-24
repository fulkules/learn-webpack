const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // devtool: "none",
  // will make the eval stuff go away so you can read your bundled code
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});
