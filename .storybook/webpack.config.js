const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules", ".storybook"],
            },
          },
        ],
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
  resolve: {
    modules: ["src", ".storybook", "node_modules"],
  },
};
