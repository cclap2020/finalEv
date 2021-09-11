import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";

export default function PrivatePage() {
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const userUid = useSelector((state) => state.userUid.usrUid);

  return (
    <div>
      <header>Private Page</header>
      <TodoList />
    </div>
  );
}
