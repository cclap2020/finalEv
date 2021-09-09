const express = require("express");
const { addTodo } = require("../controllers/addtodoController");

const router = express.Router();

router.post("/todos", addTodo);

module.exports = {
  routes: router,
};
