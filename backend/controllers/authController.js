const { userUidObj } = require("./signInController");

const getAuth = async (req, res) => {
  console.log("authController userUidObj: ", userUidObj);
  res.send("test");
  // res.send({ isAuth: isAuthObj.isAuth, userUid: userUidObj.userUid });
};

module.exports = {
  getAuth,
};
