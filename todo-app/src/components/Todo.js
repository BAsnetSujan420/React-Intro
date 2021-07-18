import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
