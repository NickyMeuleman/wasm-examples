This example uses [`wasmbuild`](https://github.com/denoland/wasmbuild) to generate a WASM binary and javascript glue code from the Rust code.

In `index.js`, that glue code is used to call a WASM function.

## Prerequisites

- [`deno`](https://deno.land/)
- Rust, recommended install via [`rustup`](https://www.rust-lang.org/learn/get-started)
  Installing some build tools for your operating system might be necessary, like `sudo apt install build-essential` on Ubuntu, or the Visual Studio build tools on Windows.

## Run locally

1. Build the WASM with `deno task wasmbuild`
2. `deno run --allow-read=. index.js`