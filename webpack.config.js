const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src") + "/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        options: {
          plugins: [
            ["babel-plugin-react-remove-properties", { "properties": ["data-test-id"] }],
          ],
        },
      },
      {
        test: /\.(?:png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};