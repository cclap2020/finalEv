import {
  REGISTER,
  SIGNIN,
  ISAUTH,
  USERUID,
  CUSTOMTOKEN,
  GETTODO,
} from "./types";

const register = () => {
  return {
    type: REGISTER,
  };
};

const sigin = () => {
  return {
    type: SIGNIN,
  };
};

const isAuth = () => {
  return {
    type: ISAUTH,
  };
};

const userUid = () => {
  return {
    type: USERUID,
  };
};

const customToken = () => {
  return {
    type: CUSTOMTOKEN,
  };
};

const getTodo = () => {
  return {
    type: GETTODO,
  };
};

export { register, sigin, isAuth, userUid, customToken, getTodo };
