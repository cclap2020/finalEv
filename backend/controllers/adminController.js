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

  // console.log("database email: ", emailFromDataBase);
  // console.log("input email: ", adminEmail);
  if (emailFromDataBase === adminEmail) {
    return true;
  } else {
    return false;
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

  console.log("database password: ", adminPassword);
  console.log("input password: ", inputPassword);

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
  console.log("inputPassword", inputPassword);
  const isAdminExist = await findAdmin(inputEmail);
  const isPassword = await comparePassword(inputPassword);

  if (isAdminExist) {
    console.log("found admin: ", inputEmail);
    if (isPassword) {
      //console.log("inside get");
      const adminUid = await DB.firestore()
        .collection("admin")
        .doc("admin")
        .get()
        .then((field) => field.data().adminInfo.adminUid);

      return adminUid;
    } else {
      return "No Such Admin /Wrong Pasasword";
    }
  } else {
    return "No Such Admin";
  }
};

const adminGetUserEmail = async (adminUid) => {
  //const { adminUid } = req.body;

  if (compareAdminUid(adminUid)) {
    //this will receive user emails from database and push it to users array
    const userEmails = await DB.firestore()
      .collection("admin")
      .doc("users")
      .listCollections()
      .then((data) => data.map((user) => user._queryOptions.collectionId));

    return userEmails;
    //res.send(userEmail);
    //console.log(usersWithData);
  } else {
    res.send("Not Authenticated");
  }
};

const adminGetUserData = async (userEmail) => {
  try {
    const fetchResult = [];
    const resultData = {};
    for (let i = 0; i < userEmail.length; i++) {
      //console.log(userEmail[i]);
      //console.log("test");
      console.log("result data: ", resultData);
      await DB.firestore()
        .collection("admin")
        .doc("users")
        .collection(userEmail[i])
        .doc("todoList")
        .get()
        .then((data) => {
          fetchResult.push(data.data());
        });
      //return (fetchResult = { ...fetchResult, result });
    }

    //console.log(fetchResult);

    return fetchResult;
    //res.send(fetchResult);
  } catch {
    (err) => console.log(err.message);
  }
};

//console.log("collection id", docRef);
const adminSignInController = async (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  //console.log("admin received: ", req.body);
  try {
    const adminUid = await getAdminUidFromDataBase(adminEmail, adminPassword);
    //console.log("adminController: ", adminUid);
    if (adminUid !== undefined) {
      console.log(adminUid);
      const userEmails = await adminGetUserEmail(adminUid);
      if (userEmails !== undefined) {
        // console.log(userEmails);
        const userData = await adminGetUserData(userEmails);
        res.send(userData);
      }

      //console.log("get admin uid suss");
      res.send("Error occur while checking userEmails");
    } else {
      res.json("Failed to get admin uid");
    }
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

module.exports = {
  adminSignInController,
};
