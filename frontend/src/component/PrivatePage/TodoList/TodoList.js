import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import TodoItem from "./TodoItem/TodoItem";
import { getTodoAction } from "../../../redux/actions";

//TodoList should send user email and uid back to server

//I tried to use HOC, but it seems to be causing some issue that I
//can't debug easily, since I don't have enought time, I will just
//create api calls in here

export default function TodoList(props) {
  const { isAuth, userUid, email, setListUpdated, listUpdated } = props;
  const todoList = useSelector((state) => state.todoList.todoList);
  const [payload, setPayload] = useState(null);
  const [actionType, setActionType] = useState(0);
  const [todoInput, setTodoInput] = useState("");

  const arr = [];

  // const checkdata = (e) => {
  //   e.preventDefault();
  //   console.log("isAuth: ", isAuth);
  //   console.log("userUid: ", userUid);
  //   console.log("todoList: ", todoList);
  //   console.log("email: ", email);
  // };

  const dispatch = useDispatch();

  //use this to handle add and delete (myabe update as well),  maybe store prev value for updata?
  const handleItemSubmit = (e, id, actionType) => {
    e.preventDefault();

    console.log(id, actionType);
    setActionType(actionType);
    setPayload({
      id: id,
      email: email,
      userUid: userUid,
      addTodo: todoInput,
    });
    setTodoInput("");
  };

  const handleDelete = (id, data) => {
    setActionType("DELETE");
    setPayload({
      id: id,
      email: email,
      userUid: userUid,
      deleteTodo: data,
    });
  };

  const handleSave = (id, prevData, newData) => {
    setActionType("UPDATE");
    setPayload({
      id: id,
      email: email,
      userUid: userUid,
      prevData: prevData,
      newData: newData,
    });
  };

  const handleItemInputOnChange = (e) => {
    setTodoInput(e.target.value);
  };

  useEffect(() => {
    const getTodo = { email: email, userUid: userUid };
    axios
      .post("http://localhost:3001/api/get-todo-list", getTodo)
      .then((data) => {
        dispatch(getTodoAction(data.data.todos));

        //console.log(data.data.todos);
      });

    if (payload !== null && actionType === "ADDTODO") {
      axios.post("http://localhost:3001/api/add-todo", payload).then((res) => {
        console.log(res);
        setListUpdated(listUpdated + 1);
      });
    } else if (payload !== null && actionType === "DELETE") {
      axios
        .post("http://localhost:3001/api/delete-todo", payload)
        .then((res) => {
          console.log(res);
          setListUpdated(listUpdated + 1);
        });
    } else if (payload !== null && actionType === "UPDATE") {
      axios
        .put("http://localhost:3001/api/update-todo", payload)
        .then((res) => console.log(res));
    }
  }, [
    email,
    userUid,
    dispatch,
    payload,
    actionType,
    setListUpdated,
    listUpdated,
  ]);

  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>
      <div>
        <form>
          <input
            placeholder="New Todo"
            onChange={handleItemInputOnChange}
            value={todoInput}
          ></input>
          <input
            type="submit"
            onClick={(e) => handleItemSubmit(e, null, "ADDTODO")}
          />
        </form>
      </div>

      {todoList !== null &&
        //todoList has the typeof obj before dispatch, due to redux's state tree is object
        typeof todoList === typeof arr &&
        todoList.map((index) => (
          <TodoItem
            id={index.id}
            data={index.data}
            handleDelete={handleDelete}
            handleSave={handleSave}
          />
        ))}
    </div>
  );
}
