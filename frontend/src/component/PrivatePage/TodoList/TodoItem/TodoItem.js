import React from "react";

export default function TodoItem(props) {
  const { id, data, handleDelete } = props;
  const actionType = "DELETE";
  return (
    <div>
      <h3>{data}</h3>
      <button onClick={() => handleDelete(id, data, actionType)}>X</button>
    </div>
  );
}
