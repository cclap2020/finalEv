const db = require("../src/db");
const admin = require("firebase-admin");
const config = require("../src/config");

const findUser = (email) => {
  return db.firestore().collection("admin").doc("users").collection(email).id;
};

// const docRef = db
//   .firestore()
//   .collection("admin")
//   .doc("users")
//   .get()
//   .then((sub) => sub.data());

//I could try to filter out with this
// const docRef = db
//   .firestore()
//   .collection("admin")
//   .doc("users")
//   .listCollections()
//   .then((subCollections) => {
//     subCollections.forEach((subCollections) => {
//       subCollections.get().then((Array) => {
//         Array.docs.forEach((doc) => {
//           console.log(doc.data());
//         });
//       });
//     });
//   });

console.log("collection id", docRef);

const signInController = (req, res) => {
  try {
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  signInController,
};
