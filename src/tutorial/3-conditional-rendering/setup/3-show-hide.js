import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    return setSize(window.window);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>size :{size}px </h2>
    </div>
  );
};

export default ShowHide;
