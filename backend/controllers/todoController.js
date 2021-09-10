const { v4: uuidv4 } = require("uuid");
const admin = require("firebase-admin");
const DB = require("../src/db");
//const firebaseAdmin = require("firebase-admin");
//const Todo = require("../models/todo");

const firestore = DB.firestore();

//receive uid and email to perform Read Delete and Updata .
//(uid should only be available if user sign in, frontend receive uid only through sign in post and register post)

//Redundant code
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

//==========================================

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
      console.log("getTodoControllers: no such user");
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
      console.log("getTodoControllers: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch {
    (err) => console.log("getTodoList: ", err.message);
  }
};

const addTodo = async (req, res) => {
  const { userUid, email, todoDataObj } = req.body;
  const externalUserUid = userUid;
  //later, move it out from this addTodo Func and just call it,
  //or even move it to another fill that contains helper functions for todo

  const insertId = (todoDataObj) => {
    const id = uuidv4();
    return {
      id,
      ...todoDataObj,
    };
  };

  const newTodoObj = insertId(todoDataObj);

  try {
    const uidFromUserInfo = await getUserUidFromUserInfo(email);
    const isUserExist = await findUser(email);

    if (!isUserExist) {
      console.log("todoControllers: no such user");
      res.send("no such user");
    } else if (uidFromUserInfo === externalUserUid) {
      await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList")
        .update({ todos: admin.firestore.FieldValue.arrayUnion(newTodoObj) });

      //.console.log(todoListPath);
      res.send("works");
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("todoController, addTodo: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//delete should receive both id and data from frontend
const deleteTodo = async (req, res) => {
  const { id, email, userUid, data } = req.body;

  const externalUserUid = userUid;

  try {
    const uidFromUserInfo = await getUserUidFromUserInfo(email);
    const isUserExist = await findUser(email);

    if (!isUserExist) {
      console.log("deletetodo Controller: no such user");
      res.send("no such user");
    } else if (uidFromUserInfo === externalUserUid) {
      const obj = { id: id, data: data };
      const todoArray = await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList")
        .update({
          todos: admin.firestore.FieldValue.arrayRemove(obj),
        });

      console.log(typeof todoArray);
      //.console.log(todoListPath);

      console.log("delete todo suss");
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("deletetodo Controller: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }

  res.send("delete todo");
};

module.exports = {
  getTodoList,
  addTodo,
  deleteTodo,
};
