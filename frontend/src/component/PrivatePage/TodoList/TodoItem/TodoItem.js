import React, { useState } from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  const { id, data, handleDelete, handleSave } = props;

  const [isDisable, setIsDisable] = useState(true);
  const prevData = data;

  const [newData, setNewData] = useState(data);

  const handleEdit = () => {
    setIsDisable(!isDisable);
  };

  const handleNewData = (e) => {
    setNewData(e.target.value);
  };

  if (isDisable === true) {
    return (
      <div className="todo-item">
        <input
          className="todo-item__input"
          value={newData}
          disabled={isDisable}
        />
        <section className="btns">
          <button className="todo-item__edit" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="todo-item__delete"
            onClick={() => handleDelete(id, data)}
          >
            Delete
          </button>
        </section>
      </div>
    );
  } else if (isDisable === false) {
    return (
      <div className="todo-item">
        <input
          className="todo-item__input"
          value={newData}
          onChange={handleNewData}
          disabled={isDisable}
        />
        <button className="todo-item__edit" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="todo-item__save"
          onClick={() => {
            setIsDisable(true);
            handleSave(id, prevData, newData);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}
