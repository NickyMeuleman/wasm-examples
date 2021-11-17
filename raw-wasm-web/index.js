let input = document.querySelector("input");
let result = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("math.wasm")).then((obj) => {
  const { square } = obj.instance.exports;

  input.addEventListener("change", (e) => {
    const num = e.target.value;
    const squared = square(num);
    result.textContent = `${num} squared is ${squared}`;
  });

  result.textContent = `${input.value} squared is ${square(input.value)}`;
});
