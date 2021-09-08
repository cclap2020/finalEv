const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const todoRoutes = require("../routes/todo-routes");
const registerRoutes = require("../routes/register-routes.js");
const signInRoutes = require("../routes/signIn-routes");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes.routes);
app.use("/", registerRoutes.routes);
app.use("/", registerRoutes.routes);

app.listen(config.port, () => {
  console.log(`Listening on Port: ${config.port}`);
});
