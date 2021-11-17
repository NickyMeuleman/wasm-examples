This is a minimal example of writing some WebAssembly and calling it from nodejs.
It has an `package.json` that marks the `index.js` file as module.

In a WebAssembly text format file called `math.wat`, we write a `square` function.

The `.wat` file contains some instructions for the webassembly stack machine.
Chris Hay has [a great webassembly stackmachine explanation](https://www.youtube.com/watch?v=Hq_cj77fuqo).

```wat
(module
    (func $square (param i32) (result i32)
        local.get 0
        local.get 0
        i32.mul
    )
    (export "square" (func $square))
)
```

The `math.wat` file is then turned into a binary `math.wasm` file.
I used the VSCode WASM extension to do this.
Alternatively you can do this via multiple online tools (like https://webassembly.github.io/wabt/demo/wat2wasm/), or the official `wat2wasm` CLI tool.

The `index.js` file uses the [`WebAssembly.instantiate`](https://nodejs.dev/learn/nodejs-with-webassembly) method to load the `.wasm` file and call the `square` function we wrote.

## Run locally

`node index.js`

