const path = require("path");

module.exports = {
  mode: "development",
  // devtool: "none",
  // will make the eval stuff go away so you can read your bundled code
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. inject styles into dom
          "css-loader", // 2. turns css into common js
          "sass-loader" // 1. turns sass into css
        ]
      }
    ]
  }
};
