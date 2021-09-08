// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "./firebase/firestore/lite";

const config = require("./config");
const admin = require("firebase-admin");
const serviceAccount = require("../finalev-62564-firebase-adminsdk-gbh0u-df223d58bd.json");

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL,
});

module.exports = db;
