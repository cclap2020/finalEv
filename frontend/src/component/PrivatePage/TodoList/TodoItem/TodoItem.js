import React from "react";

export default function TodoItem(props) {
  const { id, data, todoInput, handleItemInputOnChange } = props;

  return (
    <div>
      <h3>{data}</h3>
      <button>X</button>
    </div>
  );
}
