use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(input: &str) -> String {
    format!("Hi from a monorepo with vite, {}!", input)
}