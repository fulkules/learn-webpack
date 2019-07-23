const path = require("path");

module.exports = {
  mode: "development",
  // devtool: "none",
  // will make the eval stuff go away so you can read your bundled code
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}