const DB = require("../src/db");
const firebaseAdmin = require("firebase-admin");
const Todo = require("../models/todo");

const firestore = DB.firestore();

const addTodo = async (req, res, next) => {
  console.log("todo USERUDI: ", global.userUID);
  try {
    console.log("signIn", req.body);
    console.log("global userUID: ", global.userUID);
    const data = req.body;
    await firestore
      .collection("admin/todos/users")
      .doc(global.userUID)
      .set(data);
    res.send("Record saved successfuly");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addTodo,
};
