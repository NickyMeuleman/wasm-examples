const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "../"),
        outDir: path.resolve(__dirname, "wasm-pkg"),
      })
    );
    config.experiments.asyncWebAssembly = true;
    return config;
  },
};
