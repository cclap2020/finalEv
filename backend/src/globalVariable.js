var isAuth = [false];
var userUid = [""];

exports.getIsAuth = () => {
  return isAuth[0];
};

exports.setIsAuth = (newValue) => {
  isAuth[0] = newValue;
};

exports.getUserUid = () => {
  return userUid[0];
};

exports.setUserUid = (newValue) => {
  userUid[0] = newValue;
};
