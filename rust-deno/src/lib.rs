use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(input: &str) -> String {
    format!("Hi from Rust, compiled to WASM, executed in deno, {}!", input)
}