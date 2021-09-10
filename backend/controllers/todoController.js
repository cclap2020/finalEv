const e = require("express");
const uuid = require("uuid");

const DB = require("../src/db");
//const firebaseAdmin = require("firebase-admin");
//const Todo = require("../models/todo");

const firestore = DB.firestore();

//receive uid and email to perform Read Delete and Updata .
//(uid should only be available if user sign in, frontend receive uid only through sign in post and register post)

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

const getUserUidFromUserInfo = async (email) => {
  const userUid = await DB.firestore()
    .collection("admin")
    .doc("users")
    .collection(email)
    .doc("userInfo")
    .get()
    .then((data) => data.data().userUid);

  return userUid;
};

const getTodoList = async (req, res) => {
  const { email, userUid } = req.body;

  const externalUserUid = userUid;
  //this for test purpose, since I can't send user id to frontend, that means I can't
  //get use id f

  try {
    const uidFromUserInfo = await getUserUidFromUserInfo(email);
    const isUserExist = await findUser(email);
    //check if the external userUid is the same as the external email's userUID

    //check what firebase return could be undefined or null?
    if (!isUserExist) {
      console.log("todoControllers: no such user");
      res.send("no such user");
    } else if (uidFromUserInfo === externalUserUid) {
      const fetchResult = await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList")
        .get()
        .then((data) => data.data().todos);
      res.send(fetchResult);
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("todo Controller: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch {
    (err) => console.log("getTodoList: ", err.message);
  }
};

const addTodo = async (req, res, next) => {
  const { userUid, todoDataObj } = req.body;

  //later, move it out from this addTodo Func and just call it,
  //or even move it to another fill that contains helper functions for todo
  const assignUniqueTodoItemId = (todoDataObj) => {
    return {
      id: uuid(),
      ...todoDataObj,
    };
  };

  const todoObjWithUid = await assignUniqueTodoItemId(todoDataObj);

  try {
    await firestore.collection("admin/todos/users").doc(userUid).set(todoData);
    res.send("Record saved successfuly");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getTodoList,
  addTodo,
};
