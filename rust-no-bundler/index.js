import init, { greet } from "../pkg/without_a_bundler.js";

let input = document.querySelector("input");
let result = document.querySelector("p");

await init();

input.addEventListener("input", (e) => {
  result.textContent = greet(e.target.value);
});

result.textContent = greet(input.value);