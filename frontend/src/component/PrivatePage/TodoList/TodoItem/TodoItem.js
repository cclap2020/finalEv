import React from "react";

export default function TodoItem(props) {
  console.log(props.id);

  return <h1>{props.data}</h1>;
}
