import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";
import { Redirect, useHistory } from "react-router";

export default function PrivatePage() {
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const userUid = useSelector((state) => state.userUid.userUid);
  const todoList = useSelector((state) => state.todoList.todoList);
  const email = useSelector((state) => state.email.email);
  const [listUpdated, setListUpdated] = useState(0);

  const history = useHistory();

  if (!isAuth) {
    history.push("/");
  }
  return (
    <div>
      <header>Private Page</header>
      <TodoList
        key={listUpdated}
        setListUpdated={setListUpdated}
        isAuth={isAuth}
        userUid={userUid}
        todoList={todoList}
        email={email}
      />
    </div>
  );
}
