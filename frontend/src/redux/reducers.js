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
  userUid: "",
  customToken: "",
  todoList: [],
};

const registerReducer = (state = initState, action) => {
  //console.log("register reducer called");
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
  // console.log("signIn reducer called");
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
  //console.log("isAuth reducer called");
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

const userUidReducer = (state = initState, action) => {
  //console.log("userUID reducer called");
  switch (action.type) {
    case USERUID:
      return {
        ...state,
        userUid: action.userUid,
      };

    default:
      return state;
  }
};

// const customTokenReducer = (state = initState, action) => {
//   switch (action.type) {
//     case CUSTOMTOKEN:
//       console.log("toke reducer updated: ", action.customToken);
//       return {
//         ...state,
//         customToken: action.customToken,
//       };

//     default:
//       return state;
//   }
// };

const todoListReducer = (state = initState, action) => {
  //console.log("todoList reducer called");
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
  userUid: userUidReducer,
  todoList: todoListReducer,
});

export default rootReducer;
