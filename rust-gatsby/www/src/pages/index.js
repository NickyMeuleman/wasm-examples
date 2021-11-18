import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [wasm, setWasm] = useState(null);
  const [name, setName] = useState("BEEF");

  useEffect(() => {
    const loadWasm = async () => {
      const wasmModule = await import("../../wasm-pkg");
      setWasm(wasmModule);
    };
    loadWasm();
  }, []);

  const greeting = wasm ? wasm.greet(name) : "Loading...";

  return (
    <main>
      <title>Gatsby + Rust to WASM</title>
      <h1>Hi, Rust compiled to WASM in Gatsby!</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p>{greeting}</p>
    </main>
  );
};

export default IndexPage;
