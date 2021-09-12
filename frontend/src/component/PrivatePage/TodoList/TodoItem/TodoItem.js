import React, { useState } from "react";

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
      <div>
        <input value={newData} disabled={isDisable} />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(id, data)}>X</button>
      </div>
    );
  } else if (isDisable === false) {
    return (
      <div>
        <input value={newData} onChange={handleNewData} disabled={isDisable} />
        <button onClick={handleEdit}>Edit</button>
        <button
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
