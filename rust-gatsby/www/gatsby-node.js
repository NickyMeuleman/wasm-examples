const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "../"),
        outDir: path.resolve(__dirname, "wasm-pkg"),
      }),
    ],
    experiments: {
      asyncWebAssembly: true,
    },
  });
};
