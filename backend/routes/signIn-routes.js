const express = require("express");
const { signInController } = require("../controllers/signInController");

const router = express.Router();

router.post("/signIn", signInController);

module.exports = {
  routes: router,
};
