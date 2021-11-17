## Run locally

`cd` to this directory.
Run `wasm-pack build -t web`.
`cd` to `www`.
Run `npx serve`.

This is a minimal example of writing some Rust, which is compiled to WebAssembly.

The Rust code uses the [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) crate to facilitate interactions between Wasm modules and JavaScript. (like being able to use strings as raw webassembly only understands numbers).

That Rust code is then compiled to WebAssembly and some glue code you can use in JavaScript with [`wasm-pack`](https://github.com/rustwasm/wasm-pack).

In the `index.html` a script is included as a module with ` <script type="module" src="./index.js"></script>`.

The WebAssembly is first initialized in `index.js` by calling the default export of the main JavaScript function `wasm-pack` generated.
In this case, `wasm-pack` generated a file called `without_a_bundler.js` in the `pkg/` directory.
That name comes from the `name` you gave the Rust library in `Cargo.toml`.

That default export is a function that returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), so we wait for it to finish.

We can then use the named `greet` export from that same file.
This calls the glue code that will call the WebAssembly `greet` function.

```js
import init, { greet } from "../pkg/without_a_bundler.js";

await init();

console.log(greet("Nicky"));
```

## Run locally

Build the Rust code with `wasm-pack build --target web`

Run a web server to serve the `index.html`.
For example: `npx serve`.
