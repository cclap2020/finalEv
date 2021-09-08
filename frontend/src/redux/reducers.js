import { combineReducers } from "redux";
import { ISAUTH, REGISTER, SIGNIN, USERUID } from "./types";

const initState = {
  emailValue: "",
  passowrdValue: "",
  isAuth: false,
  userUID: "",
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

const rootReducer = combineReducers({
  register: registerReducer,
  signin: signInReducer,
  isAuth: isAuthReducer,
  userUID: userUIDReducer,
});

export default rootReducer;
