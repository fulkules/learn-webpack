const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: "none",
  // will make the eval stuff go away so you can read your bundled code
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. inject styles into dom
          "css-loader", // 2. turns css into common js
          "sass-loader" // 1. turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};