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
  console.log("check req body", req.body);

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
        .then((data) => data.data());
      res.send(fetchResult);
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("getTodoControllers: Not authenticated");
      console.log("udi from database: ", uidFromUserInfo);
      console.log("udi from req.body: ", externalUserUid);
      res.send("Not Authenticated");
    }
  } catch {
    (err) => console.log("getTodoList: ", err.message);
  }
};

const addTodo = async (req, res) => {
  const { userUid, email, addTodo, id } = req.body;
  const externalUserUid = userUid;
  //later, move it out from this addTodo Func and just call it,
  //or even move it to another fill that contains helper functions for todo

  let itemID = uuidv4();
  // const getTodoData = (todoDataObj) => {
  //   return todoDataObj.data;
  // };

  console.log("itemUID ", itemID);
  // const todoData = getTodoData(todoDataObj);

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
        .update({
          todos: admin.firestore.FieldValue.arrayUnion({
            id: itemID,
            data: addTodo,
          }),
        });

      //.console.log(todoListPath);
      res.send("add todo success");
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
  const { id, email, userUid, deleteTodo } = req.body;

  const externalUserUid = userUid;

  try {
    const uidFromUserInfo = await getUserUidFromUserInfo(email);
    const isUserExist = await findUser(email);

    if (!isUserExist) {
      console.log("deletetodo Controller: no such user");
      res.send("no such user");
    } else if (uidFromUserInfo === externalUserUid) {
      const todoListRef = await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList");

      // const listdata = await todoListRef.get().then((data) => data.data());

      todoListRef.update({
        todos: admin.firestore.FieldValue.arrayRemove({
          id: id,
          data: deleteTodo,
        }),
      });

      // console.log(typeof listdata);
      // //.console.log(todoListPath);

      console.log("delete suss");
      res.send("Delete suss");
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("deletetodo Controller: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//updateTodo is not working
const updateTodo = async (req, res) => {
  const { id, email, userUid, newData, prevData } = req.body;

  const externalUserUid = userUid;

  try {
    const uidFromUserInfo = await getUserUidFromUserInfo(email);
    const isUserExist = await findUser(email);

    if (!isUserExist) {
      console.log("updataTodo Controller: no such user");
      res.send("no such user");
    } else if (uidFromUserInfo === externalUserUid) {
      await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList")
        .update({
          todos: admin.firestore.FieldValue.arrayRemove({
            id: id,
            data: prevData,
          }),
        });

      await firestore
        .collection("admin")
        .doc("users")
        .collection(email)
        .doc("todoList")
        .update({
          todos: admin.firestore.FieldValue.arrayUnion({
            id: id,
            data: newData,
          }),
        });

      console.log("updated suss");
      //.console.log(todoListPath);
      res.send("updated suss");
      console.log("updateTodo todo suss");
    } else {
      //here means uid in the userInFo does not match the external uid
      console.log("updataTodo Controller: Not authenticated");
      console.log(uidFromUserInfo);
      res.send("Not Authenticated");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
};
