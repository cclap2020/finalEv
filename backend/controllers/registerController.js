const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");

const firestore = DB.firestore();

let token = "";

const createUser = async (email, password) => {};

const createToken = (id) => {
  firebaseAdmin
    .auth()
    .createCustomToken(id)
    .then((token) => (global.token = token));
};

const createCollection = async (email, password, id) => {
  firestore
    .collection("admin")
    .doc("users")
    .collection(email)
    .doc("userInfo")
    .set({
      userID: id,
      isNewUser: true,
      email: email,
      password: password,
    });
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    firebaseAdmin
      .auth()
      .createUser({
        email: email,
        password: password,
      })
      .then((UserRecord) => {
        //console.log(UserRecord);
        createCollection(email, password, UserRecord.uid);
        res.send({ isAuth: true, userUID: UserRecord.uid });
        // createToken(UserRecord.uid);
        // console.log(UserRecord.uid);
      });
  } catch {
    (err) => console.log(err);
  }
};

module.exports = {
  registerUser,
};
