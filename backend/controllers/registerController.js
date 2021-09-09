const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");

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
        // console.log("Signed In");
        // console.log("userRecord UID: ", UserRecord.uid);
        // console.log("userRecordl ", UserRecord);
        global.userUID = UserRecord.uid;

        firestore
          .collection("admin")
          .doc("users")
          .collection(email)
          .doc("userInfo")
          .set({
            userID: UserRecord.uid,
            isNewUser: true,
            email: email,
            password: password,
          });
        userUID = UserRecord.uid;
        res.send({
          isAuth: true,
          userUID: userUID,
        });
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
