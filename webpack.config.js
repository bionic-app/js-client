var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "bionic",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["env"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  mode: "production"
};
