import React from "react";

export default function AdminItem(props) {
  const { userEmail, userData } = props;
  console.log(userData.todos[0].id);

  return (
    <div>
      <h3>{userEmail}</h3>
    </div>
  );
}
