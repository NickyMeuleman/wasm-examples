This is a minimal example of writing some Rust, which is compiled to WebAssembly that is in turn executed in NodeJS.

The Rust code uses the [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) crate to facilitate interactions between Wasm modules and JavaScript. (like being able to use strings because raw webassembly only understands numbers).

That Rust code is then compiled to WebAssembly and some glue code you can use in JavaScript with [`wasm-pack`](https://github.com/rustwasm/wasm-pack).

After building the rust code with `wasm-pack build --target nodejs`, we can import and call the `greet` function we wrote in Rust.

```js
const { greet } = require("./pkg");

console.log(greet("Nicky"));
```

## Run locally

- Run `wasm-pack build --target nodejs`.
- Execute with `node index.js`.
