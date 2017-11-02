const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          limit: 50000,
          mimetype: "image/svg+xml",
        },
      },
    ],
  },
};
