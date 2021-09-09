const express = require("express");
const { getAuth } = require("../controllers/authController");

const router = express.Router();

const sendAuth = router.get("/api/auth", getAuth);

module.exports = {
  getAuth: sendAuth,
};
