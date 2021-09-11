import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import TodoItem from "./TodoItem/TodoItem";
import { getTodoAction } from "../../../redux/actions";

//TodoList should send user email and uid back to server
export default function TodoList(props) {
  const { isAuth, userUid, email } = props;
  const todoList = useSelector((state) => state.todoList.todoList);
  const arr = [];
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
      .then((data) => {
        dispatch(getTodoAction(data.data.todos));
        //console.log(data.data.todos);
      });
  }, [email, userUid, dispatch]);

  return (
    <div>
      <h1>TodoList</h1>
      {todoList !== null &&
        //todoList has the typeof obj before dispatch, due to redux's state tree is object
        typeof todoList === typeof arr &&
        todoList.map((index) => <TodoItem id={index.id} data={index.data} />)}
      <button onClick={checkdata}>ChekcData</button>
    </div>
  );
}
