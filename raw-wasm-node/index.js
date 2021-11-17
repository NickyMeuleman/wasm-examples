import fs from 'fs';

const buffer = fs.readFileSync('./math.wasm');
const math = await WebAssembly.instantiate(buffer).then(obj => obj.instance.exports);

console.log(math.square(5));