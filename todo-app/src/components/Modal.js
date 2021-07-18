import React from "react";

const Modal = ({ onCancel, onConfirm }) => {
  const confirmHandler = () => onConfirm();
  const cancelHandler = () => onCancel();

  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn-alt" onClick={confirmHandler}>
        Confirm
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
