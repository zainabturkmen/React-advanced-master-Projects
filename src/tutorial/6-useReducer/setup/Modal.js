import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
