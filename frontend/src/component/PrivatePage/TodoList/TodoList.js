import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { TodoItem } from "./TodoItem/TodoItem";

//TodoList should send user email and uid back to server
export default function TodoList(props) {
  const { isAuth, userUid, todoList, email } = props;

  const checkdata = (e) => {
    e.preventDefault();
    console.log("isAuth: ", isAuth);
    console.log("userUid: ", userUid);
    console.log("todoList: ", todoList);
    console.log("email: ", email);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { email: email, userUid: userUid };

    axios
      .post("http://localhost:3001/api/get-todo-list", payload)
      .then((data) => console.log(data));
  }, [email, userUid]);

  return (
    <div>
      <h1>TodoList</h1>

      <button onClick={checkdata}>ChekcData</button>
    </div>
  );
}
