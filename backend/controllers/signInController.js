const db = require("../src/db");
const admin = require("firebase-admin");
const config = require("../src/config");

//this will determine if the sigin user is in the data base or not
const findUser = async (email, res) => {
  //collection.get will return an array that contains match user.
  //If that user does not exist, array size = 0
  const size = await db
    .firestore()
    .collection("admin")
    .doc("users")
    .collection(email)
    .get()
    .then((query) => query.size);

  //console.log("findUser size: ",size);

  if (size === 0) {
    return false;
  } else {
    return true;
  }
};

const comparePassword = async (inputEmail, inputPassword) => {
  //compare data base's user password and the sign in password
  const userPassword = await db
    .firestore()
    .collection("admin")
    .doc("users")
    .collection(inputEmail)
    .doc("userInfo")
    .get()
    .then((data) => data.data().password);

  if (inputPassword === userPassword) {
    return true;
  } else {
    return false;
  }
};

const getUserUid = async (email) => {
  const userUid = await db
    .firestore()
    .collection("admin")
    .doc("users")
    .collection(email)
    .doc("userInfo")
    .get()
    .then((data) => data.data().userID);

  return userUid;
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

//console.log("collection id", docRef);

const signInController = async (req, res) => {
  const { email, password } = req.body;
  //result should store true or false based on if the collection exist or not.
  let result = await findUser(email);
  if (result === false) {
    return res.send("No Such User");
  } else {
    let compareResult = await comparePassword(email, password);
    if (compareResult) {
      const userUid = await getUserUid(email);
      res.send(userUid);
      console.log(userUid);
    } else {
      res.send("Wrong password");
      console.log("Wrong password");
    }
  }
};

module.exports = {
  signInController,
};
