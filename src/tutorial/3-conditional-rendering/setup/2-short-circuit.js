import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(".");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>vlaue: {secondValue}</h1> */}
      <h1>{text || "John Doe"}</h1>
      <button className="btn">toggle error</button>
      {text && <h1>Hello world</h1>}
    </>
  );
};

export default ShortCircuit;
