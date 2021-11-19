import React, { useState, useEffect } from "react";

export default function Home() {
  const [wasm, setWasm] = useState(null);
  const [name, setName] = useState("BEEF");

  useEffect(() => {
    const loadWasm = async () => {
      const wasmModule = await import("../wasm-pkg");
      setWasm(wasmModule);
    };
    loadWasm();
  }, []);

  const greeting = wasm ? wasm.greet(name) : "Loading...";

  return (
    <main>
      <title>Next.js + Rust to WASM</title>
      <h1>Hi, Rust compiled to WASM in Next.js!</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p>{greeting}</p>
    </main>
  );
}
