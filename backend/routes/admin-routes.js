const express = require("express");
const {
  adminSignInController,
  adminGetUserEmailController,
} = require("../controllers/adminController");

const router = express.Router();

const adminSignIn = router.post("/admin", adminSignInController);
const adminGetUserEmail = router.post(
  "/admin/fetch-data",
  adminGetUserEmailController
);

module.exports = {
  adminSignIn: adminSignIn,
  adminGetUserEmail: adminGetUserEmail,
};
