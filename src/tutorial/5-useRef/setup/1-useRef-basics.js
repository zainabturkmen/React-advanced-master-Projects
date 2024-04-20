import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  return (
    <>
      <form className="form">
        <div>
           <input type="text" />
           <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
