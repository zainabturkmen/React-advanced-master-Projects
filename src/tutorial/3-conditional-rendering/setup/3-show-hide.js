import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="" btn onClick={() => setShow(!show)}>
        show/hide
      </button>
    </>
  );
};

const Item = () => {
  return <div style={{}}></div>;
};
export default ShowHide;
