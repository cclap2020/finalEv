const DB = require("../src/db");

//Sign in will send uid if the user exist and the input password is the same as the
//password inside the database

//let userUidObj = { userID: "" };

//this will determine if the sigin user is in the data base or not
const findUser = async (email) => {
  //collection.get will return an array that contains match user.
  //If that user does not exist, array size = 0
  const size = await DB.firestore()
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
  const userPassword = await DB.firestore()
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

const getUserUidFromDataBase = async (email) => {
  const userUid = await DB.firestore()
    .collection("admin")
    .doc("users")
    .collection(email)
    .doc("userInfo")
    .get()
    .then((field) => field.data().userUid);

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

  console.log("test");
  //result should store true or false based on if the collection exist or not.
  let result = await findUser(email);

  if (result === false) {
    console.log("SignIn Controller: no such user");
    return res.json({ test: "test" });
  } else {
    //compareResult
    let compareResult = await comparePassword(email, password);

    if (compareResult) {
      //this userUid is the userID from the data base
      try {
        const userUid = await getUserUidFromDataBase(email);

        // userUidObj.userID = userUid;

        //console.log(userUidObj.userID);
        res.json({ isAuth: true, userUid: userUid });
      } catch {
        (err) => {
          console.log(err);
        };
      }

      //console.log("sigin isAuth: ", getIsAuth());
      // console.log("sigin userUid: ", getUserUid());
      //console.log(userUid);
    } else {
      console.log("Signin Controller: Wrong password");
      res.json("Wrong password");
    }
  }
};

module.exports = {
  signInController,
  //userUidObj,
};
