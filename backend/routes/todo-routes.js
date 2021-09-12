const express = require("express");
const {
  addTodo,
  getTodoList,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

const addTodoRouter = router.post("/add-todo", addTodo);

const getTodoListRouter = router.post("/get-todo-list", getTodoList);

const deleteTodoRouter = router.post("/delete-todo", deleteTodo);

const updateTodoRouter = router.put("/update-todo", updateTodo);

module.exports = {
  addTodoRoute: addTodoRouter,
  getTodoListRoute: getTodoListRouter,
  deleteTodoRoute: deleteTodoRouter,
  updateTodoRoute: updateTodoRouter,
};
