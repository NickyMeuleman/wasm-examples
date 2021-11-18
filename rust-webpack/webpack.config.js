const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "."),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};