const {
  setIsAuth,
  setUserUid,
  getIsAuth,
  getUserUid,
} = require("../src/globalVariable");

const getAuth = async (req, res) => {
  const isAuth = getIsAuth();
  const userUid = getUserUid();
  console.log("authController isAuth: ", isAuth);
  res.send({ isAuth: isAuth, userUid: userUid });
};

module.exports = {
  getAuth,
};
