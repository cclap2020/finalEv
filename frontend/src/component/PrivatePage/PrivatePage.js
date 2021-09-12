import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";
import { Redirect, useHistory } from "react-router";
import SignOut from "../SignOut/SignOut";
import "./PrivatePage.css";

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
    <div className="private-page">
      <SignOut />
      <header className="private-page__header">
        <h1>Private Page</h1>
      </header>
      <TodoList
        key={listUpdated}
        listUpdated={listUpdated}
        setListUpdated={setListUpdated}
        isAuth={isAuth}
        userUid={userUid}
        todoList={todoList}
        email={email}
      />
    </div>
  );
}
