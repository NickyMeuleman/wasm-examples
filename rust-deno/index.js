import { instantiate } from "./lib/local_wasm.generated.js";

const { greet } = await instantiate();

console.log(greet("Nicky"));