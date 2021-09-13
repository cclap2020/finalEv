const express = require("express");
const cors = require("cors");

const config = require("./config.js");
const todoRoutes = require("../routes/todo-routes");
const registerRoutes = require("../routes/register-routes.js");
const signInRoutes = require("../routes/signIn-routes");
const adminRoutes = require("../routes/admin-routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes.getTodoListRoute);
app.use("/api", todoRoutes.addTodoRoute);
app.use("/api", todoRoutes.deleteTodoRoute);
app.use("/api", todoRoutes.updateTodoRoute);
app.use("/", registerRoutes.routes);
app.use("/", signInRoutes.routes);
app.use("/", adminRoutes.adminSignIn);

app.listen(config.port, () => {
  console.log(`Listening on Port: ${config.port}`);
});
