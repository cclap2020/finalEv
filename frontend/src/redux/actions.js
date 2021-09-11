import {
  REGISTER,
  SIGNIN,
  ISAUTH,
  USERUID,
  CUSTOMTOKEN,
  GETTODO,
  STOREEMAIL,
} from "./types";

const registerAction = () => {
  return {
    type: REGISTER,
  };
};

const siginAction = () => {
  return {
    type: SIGNIN,
  };
};

const isAuthAction = (isAuth) => {
  return {
    type: ISAUTH,
    isAuth: isAuth,
  };
};

const userUidAction = (userUid) => {
  return {
    type: USERUID,
    userUid: userUid,
  };
};

const getTodoAction = (todoList) => {
  return {
    type: GETTODO,
    todoList: todoList,
  };
};

const storeEmailAction = (email) => {
  return {
    type: STOREEMAIL,
    email: email,
  };
};

export {
  registerAction,
  siginAction,
  isAuthAction,
  userUidAction,
  getTodoAction,
  storeEmailAction,
};
