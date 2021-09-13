import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
import {
  GETTODO,
  ISAUTH,
  REGISTER,
  SIGNIN,
  SIGNOUT,
  STOREEMAIL,
  USERUID,
  ADMIN_USERDATA,
} from "./types";

const initState = {
  isAuth: false,
  userUid: "",
  email: "",
  todoList: null,
  admin_userData: null,
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
      console.log(action);
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
      console.log("todoReduer action: ", action);
      return {
        ...state,
        todoList: action.todoList,
      };
    default:
      return state;
  }
};

const storeEmailReduer = (state = initState, action) => {
  switch (action.type) {
    case STOREEMAIL:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};

const signOutReducer = (state = initState, action) => {
  // console.log("signout red called", action);
  switch (action.type) {
    case SIGNOUT:
      return {
        ...state,
        email: action.email,
        userUid: action.userUid,
        isAuth: action.isAuth,
        todoList: action.todoList,
      };
    default:
      return state;
  }
};

const admin_userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ADMIN_USERDATA:
      return {
        ...state,
        admin_userData: action.admin_userData,
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
  email: storeEmailReduer,
  signOut: signOutReducer,
  admin_userDataReducer,
});

export default rootReducer;
