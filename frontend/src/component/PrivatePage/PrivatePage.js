import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";
import { Redirect, useHistory } from "react-router";

export default function PrivatePage() {
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const userUid = useSelector((state) => state.userUid.userUid);
  const todoList = useSelector((state) => state.todoList.todoList);
  const email = useSelector((state) => state.email.email);

  const history = useHistory();

  if (!isAuth) {
    history.push("/");
  }
  return (
    <div>
      <header>Private Page</header>
      <TodoList
        isAuth={isAuth}
        userUid={userUid}
        todoList={todoList}
        email={email}
      />
    </div>
  );
}
