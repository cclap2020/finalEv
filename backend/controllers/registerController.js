const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");
const { setIsAuth, setUserUid } = require("../src/globalVariable");

const firestore = DB.firestore();

let token = "";

// const createToken = (id) => {
//   firebaseAdmin
//     .auth()
//     .createCustomToken(id)
//     .then((token) => (global.token = token));
// };

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

        //this will create collections
        createCollection(email, password, UserRecord.uid);
        setIsAuth(true);
        setUserUid(UserRecord.uid);

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
