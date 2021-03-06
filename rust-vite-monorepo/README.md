based on https://github.com/dsegovia90/wasm-vite-svelte-monorepo

A more complicated setup that automatically refreshes, including on changes to the Rust code.

## Prerequisites

- [`node`](https://nodejs.org/en/)
- [`yarn`](https://yarnpkg.com/)
- Rust, recommended install via [`rustup`](https://www.rust-lang.org/learn/get-started)
  Installing some build tools for your operating system might be necessary, like `sudo apt install build-essential` on Ubuntu, or the Visual Studio build tools on Windows.
- [`wasm-pack`](https://rustwasm.github.io/wasm-pack/)
- [`cargo-watch`](https://crates.io/crates/cargo-watch)

---

This is set up as a `yarn` monorepo, one workspace is the `vite` folder, and one workspace is the folder that is generated by `wasm-pack`.

[`cargo-watch`](https://crates.io/crates/cargo-watch) watches the Rust code and runs `wasm-pack build --target web` on changes.

The output from `wasm-pack` is used in the `www/` folder as an npm package.
The `www/` therefore has a dependency in `package.json` on that output.

```json
"dependencies": {
    "local-wasm": "0.1.0"
}
```

The `local-wasm` name comes from the `name` field in `Cargo.toml`.
The "0.1.0" version comes from the `version` field in `Cargo.toml`.

## Run locally

Build the WebAssembly and glue code package with `yarn rust:build`.

Install dependencies in the root folder by running `yarn`.

Watch for changes and run the web server with `yarn dev`.
For repeat executions, only `yarn dev` is needed.