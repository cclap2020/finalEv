const express = require("express");
const {
  addTodo,
  getTodoList,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

const addTodoRouter = router.post("/addtodos", addTodo);

const getTodoListRouter = router.post("/get-todo-list", getTodoList);

const deleteTodoRouter = router.post("/delete-todo", deleteTodo);

module.exports = {
  addTodoRoute: addTodoRouter,
  getTodoListRoute: getTodoListRouter,
  deleteTodoRoute: deleteTodoRouter,
};
