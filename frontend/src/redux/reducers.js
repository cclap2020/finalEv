import { combineReducers } from "redux";
import {
  CUSTOMTOKEN,
  GETTODO,
  ISAUTH,
  REGISTER,
  SIGNIN,
  USERUID,
} from "./types";

const initState = {
  emailValue: "",
  passowrdValue: "",
  isAuth: false,
  userUID: "",
  customToken: "",
  todoList: [],
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        emailValue: action.email,
        passowrdValue: action.password,
      };
    default:
      return state;
  }
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        emailValue: action.email,
        passowrdValue: action.password,
      };
    default:
      return state;
  }
};

const isAuthReducer = (state = initState, action) => {
  switch (action.type) {
    case ISAUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

const userUIDReducer = (state = initState, action) => {
  switch (action.type) {
    case USERUID:
      return {
        ...state,
        userUID: action.userUID,
      };

    default:
      return state;
  }
};

const customTokenReducer = (state = initState, action) => {
  switch (action.type) {
    case CUSTOMTOKEN:
      console.log("toke reducer updated: ", action.customToken);
      return {
        ...state,
        customToken: action.customToken,
      };

    default:
      return state;
  }
};

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case GETTODO:
      console.log("todoListReducer is called");
      return {
        ...state,
        todoList: action.todoList,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  register: registerReducer,
  signin: signInReducer,
  isAuth: isAuthReducer,
  userUID: userUIDReducer,
  customToken: customTokenReducer,
  todoList: todoListReducer,
});

export default rootReducer;
