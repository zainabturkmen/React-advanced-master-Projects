import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = 

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" />
          <button type="button">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
