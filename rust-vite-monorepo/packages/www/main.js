import init, { greet } from "local-wasm";

let input = document.querySelector("input");
let result = document.querySelector("p");

await init();

input.addEventListener("input", (e) => {
  result.textContent = greet(e.target.value);
});

result.textContent = greet(input.value);
