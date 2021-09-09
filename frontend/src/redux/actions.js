import { REGISTER, SIGNIN, ISAUTH, USERUID, CUSTOMTOKEN } from "./types";

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

function customToken() {
  return {
    type: CUSTOMTOKEN,
  };
}
export { register, sigin, isAuth, userUID, customToken };
