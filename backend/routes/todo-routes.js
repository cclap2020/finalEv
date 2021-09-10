const express = require("express");
const { addTodo, getTodoList } = require("../controllers/todoController");

const router = express.Router();

const addTodoRouter = router.post("/addtodos", addTodo);

const getTodoListRouter = router.post("/get-todo-list", getTodoList);

module.exports = {
  addTodoRoute: addTodoRouter,
  getTodoListRoute: getTodoListRouter,
};
