const express = require("express");
const { adminSignInController } = require("../controllers/adminController");

const router = express.Router();

const adminSignIn = router.post("/admin-signin", adminSignInController);

module.exports = {
  adminSignIn: adminSignIn,
};
