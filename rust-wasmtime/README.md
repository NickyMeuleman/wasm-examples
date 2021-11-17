This is a minimal example of writing some Rust, which is compiled to WebAssembly that is in turn executed via [wasmtime](https://wasmtime.dev/).

The endgoal is to compile a `.wasm` which `wasmtime` executes.

The Rust code is compiled with the `wasm32-wasi` target.
`wasmtime` can understand the `.wasm` file this creates.

## Prerequisites

- Rust, recommended install via [`rustup`](https://www.rust-lang.org/learn/get-started)
  Installing some build tools for your operating system might be necessary, like `sudo apt install build-essential` on Ubuntu, or the Visual Studio build tools on Windows.
- [wasmtime](https://wasmtime.dev/)

## Run locally

- Add the `wasm32-wasi` target to your Rust toolchain
```
rustup target add wasm32-wasi
```

- Build the Rust code.
```
cargo build --target wasm32-wasi
```

- Execute the build `.wasm` file
```
wasmtime target/wasm32-wasi/debug/rust-wasmtime.wasm
```

The "rust-wasmtime" name comes from the `"name"` field in `Cargo.toml`.
