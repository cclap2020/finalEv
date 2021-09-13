import {
  REGISTER,
  SIGNIN,
  ISAUTH,
  USERUID,
  GETTODO,
  STOREEMAIL,
  SIGNOUT,
  ADMIN_USERDATA,
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

const signOutAction = (userUid, email, isAuth, todoList) => {
  return {
    type: SIGNOUT,
    email: email,
    userUid: userUid,
    isAuth: isAuth,
    todoList: todoList,
  };
};

const admin_userDataAction = (admin_userData) => {
  return {
    type: ADMIN_USERDATA,
    admin_userData: admin_userData,
  };
};

export {
  registerAction,
  siginAction,
  isAuthAction,
  userUidAction,
  getTodoAction,
  storeEmailAction,
  signOutAction,
  admin_userDataAction,
};
