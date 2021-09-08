import { combineReducers } from "redux";
import { ISAUTH, REGISTER, SIGNIN, USERUID } from "./types";

const initState = {
  registerEmail: "",
  registerPassword: "",
  signInEmail: "",
  signInPassword: "",
  isAuth: false,
  userUID: "",
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerEmail: action.email,
        registerPassword: action.password,
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
        signInEmail: action.email,
        signInPassword: action.password,
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

const rootReducer = combineReducers({
  register: registerReducer,
  signin: signInReducer,
  isAuth: isAuthReducer,
  userUID: userUIDReducer,
});

export default rootReducer;
