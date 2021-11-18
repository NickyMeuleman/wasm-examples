let input = document.querySelector("input");
let result = document.querySelector("p");

import("./pkg").then((module) => {
  const { greet } = module;
  input.addEventListener("input", (e) => {
    result.textContent = greet(e.target.value);
  });
  result.textContent = greet(input.value);
});

