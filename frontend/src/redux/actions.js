import { REGISTER, SIGNIN, ISAUTH, USERUID } from "./types";

function register() {
  return {
    type: REGISTER,
  };
}

function sigin() {
  return {
    type: SIGNIN,
  };
}

function isAuth() {
  return {
    type: ISAUTH,
  };
}

function userUID() {
  return {
    type: USERUID,
  };
}

export { register, sigin, isAuth, userUID };
