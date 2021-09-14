const express = require("express");
const {
  adminSignInController,
  admin_AddTodoController,
  admin_DeleteTodoController,
  admin_UpdateTodoController,
} = require("../controllers/adminController");

const router = express.Router();

const adminSignIn = router.post("/admin-signin", adminSignInController);

const admin_AddTodo = router.post(
  "/admin/api/add-todo",
  admin_AddTodoController
);

const admin_DeleteTodo = router.delete(
  "/admin/api/delete-todo",
  admin_DeleteTodoController
);

const admin_UpdateTodo = router.put(
  "/admin/api/update-todo",
  admin_UpdateTodoController
);

module.exports = {
  adminSignIn: adminSignIn,
  admin_UpdateTodo: admin_UpdateTodo,
  admin_DeleteTodo: admin_DeleteTodo,
  admin_AddTodo: admin_AddTodo,
};
