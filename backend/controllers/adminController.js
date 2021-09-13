const DB = require("../src/db");

//compare admin email in the database to the input email
const findAdmin = async (adminEmail) => {
  //collection.get will return an array that contains match user.
  //If that user does not exist, array size = 0
  const emailFromDataBase = await DB.firestore()
    .collection("admin")
    .doc("admin")
    .get()
    .then((field) => field.data().adminInfo.adminEmail);

  //console.log("findUser size: ",size);

  if (emailFromDataBase !== adminEmail) {
    return false;
  } else {
    return true;
  }
};

//compare admin password in the database to the input email
const comparePassword = async (inputPassword) => {
  //compare data base's user password and the sign in password
  const adminPassword = await DB.firestore()
    .collection("admin")
    .doc("admin")
    .get()
    .then((field) => field.data().adminInfo.adminPassword);

  if (inputPassword === adminPassword) {
    return true;
  } else {
    return false;
  }
};

const compareAdminUid = async (inputUid) => {
  const adminUid = await DB.firestore()
    .collection("admin")
    .doc("admin")
    .get()
    .then((field) => field.data().adminInfo.adminUid);

  if (inputUid === adminUid) {
    return true;
  }
  return false;
};
//finally get the uid of the admin
const getAdminUidFromDataBase = async (inputEmail, inputPassword) => {
  //just to double check.
  //findAdmin(inputEmail);
  //comparePassword(inputPassword)
  if (findAdmin(inputEmail)) {
    if (comparePassword(inputPassword)) {
      //console.log("inside get");
      const adminUid = await DB.firestore()
        .collection("admin")
        .doc("admin")
        .get()
        .then((field) => field.data().adminInfo.adminUid);
      return adminUid;
    } else {
      return "No Such Admin";
    }
  } else {
    return "No Such Admin";
  }
};

//console.log("collection id", docRef);
const adminSignInController = async (req, res) => {
  const { admineEmail, adminPassword } = req.body;
  //console.log("admin received: ", req.body);
  try {
    const adminUid = await getAdminUidFromDataBase(admineEmail, adminPassword);
    //console.log("adminController: ", adminUid);
    if (adminUid !== undefined) {
      console.log("get admin uid suss");
      res.json({ isAuth: true, adminUid: adminUid });
    } else {
      res.json("Failed to get admin uid");
    }
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

const adminGetUserEmailController = async (req, res) => {
  const { adminUid } = req.body;

  if (compareAdminUid(adminUid)) {
    //this will receive user emails from database and push it to users array
    const userEmail = await DB.firestore()
      .collection("admin")
      .doc("users")
      .listCollections()
      .then((data) => data.map((user) => user._queryOptions.collectionId));

    res.send(userEmail);
    //console.log(usersWithData);
  } else {
    res.send("Not Authenticated");
  }
};

module.exports = {
  adminSignInController,
  adminGetUserEmailController,
};
