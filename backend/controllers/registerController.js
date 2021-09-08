const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");
// const Register = require("../models/register");

const firestore = DB.firestore();

global.userUID = "";

const registerUser = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    firebaseAdmin
      .auth()
      .createUser({
        email: email,
        password: password,
      })
      .then((UserRecord) => {
        console.log("Signed In");
        console.log("userRecord UID: ", UserRecord.uid);
        global.userUID = UserRecord.uid;
        firestore
          .collection("admin/todos/users")
          .doc(global.userUID)
          .set({ isNewUser: true });
        userUID = UserRecord.uid;
        res.send({ isAuth: true, userUID: userUID });
      });
    // await firestore.collection("admin/users/users").doc().set(data);
    // res.send("Received data");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

console.log("reg controler userUID:  ", userUID);

module.exports = {
  registerUser,
};
