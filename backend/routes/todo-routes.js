const express = require("express");
const { addTodo } = require("../controllers/todoController");

const router = express.Router();

router.post("/todos", addTodo);

module.exports = {
  routes: router,
};
