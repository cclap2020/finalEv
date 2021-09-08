const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");

const firestore = DB.firestore();

// firebaseAdmin
//   .auth()
//   .verifyIdToken(idToken)
//   .then((decodedToken) => {
//     const uid = decodedToken.uid;
//     console.log(uid);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const signInController = (req, res) => {
  try {
    console.log(req.body);
    //req should gives email and password
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  signInController,
};
