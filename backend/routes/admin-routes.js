const express = require("express");
const {
  adminSignInController,
  adminGetUserEmailController,
  adminGetUserDataController,
} = require("../controllers/adminController");

const router = express.Router();

const adminSignIn = router.post("/admin", adminSignInController);
const adminGetUserEmail = router.post(
  "/admin/fetch-users",
  adminGetUserEmailController
);

const adminGetUserData = router.post(
  "/admin/fetch-user-data",
  adminGetUserDataController
);

module.exports = {
  adminSignIn: adminSignIn,
  adminGetUserEmail: adminGetUserEmail,
  adminGetUserData: adminGetUserData,
};
