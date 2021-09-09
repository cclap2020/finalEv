const express = require("express");
const cors = require("cors");

const config = require("./config.js");
const todoRoutes = require("../routes/todo-routes");
const registerRoutes = require("../routes/register-routes.js");
const signInRoutes = require("../routes/signIn-routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes.routes);
app.use("/", registerRoutes.routes);
app.use("/", signInRoutes.routes);

app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
});

app.listen(config.port, () => {
  console.log(`Listening on Port: ${config.port}`);
});
