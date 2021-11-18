A more complicated setup that automatically refreshes, including on changes to the Rust code.

## Prerequisites

- [`node`](https://nodejs.org/en/)
- Rust, recommended install via [`rustup`](https://www.rust-lang.org/learn/get-started)
  Installing some build tools for your operating system might be necessary, like `sudo apt install build-essential` on Ubuntu, or the Visual Studio build tools on Windows.
- [`wasm-pack`](https://rustwasm.github.io/wasm-pack/)

## Run locally

Install dependencies with `npm i`.
Start the webpack dev server with `npm run dev`.

---

Webpack is used to orchestrate everything.
The dev server is ran by [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server).
The automatic building of the Rust code by [`wasm-pack`](https://github.com/rustwasm/wasm-pack) is handled by [`@wasm-tool/wasm-pack-plugin`](https://github.com/wasm-tool/wasm-pack-plugin).

The buildt WASM package is imported is `index.js` via a dynamic import.
The returned module object contains the function we wrote in Rust. (specifically, the glue code function `wasm-pack` created that calls into the `.wasm` binary).