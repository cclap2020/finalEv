// // import firebase from "firebase";
// // import axios from "axios";
// // import { useSelector } from "react-redux";

// const config = {
//   apiKey: "AIzaSyBOAnzhaiKYS5z4eOxvJq1Of6VXLdXQokI",
//   authDomain: "finalev-62564.firebaseapp.com",
//   databaseURL: "https://finalev-62564.firebaseio.com",
//   projectId: "finalev-62564",
//   storageBucket: "finalev-62564.appspot.com",
//   messagingSenderId: "234981439079",
//   appId: "1:234981439079:web:ab388be54958c6aa3e46c2",
// };

// const app = null;

// // if (!firebase.apps.length) {
// //   firebase.initializeApp(config);
// // } else {
// //   app = firebase.app(); // if already initialized, use that one
// // }

// // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

// // const SessionLogin = () => {
// //   const email = useSelector((state) => state.signin.emailValue);
// //   const password = useSelector((state) => state.signin.passwordValue);

// //   return firebase
// //     .auth()
// //     .signInWithEmailAndPassword()
// //     .then(({ user }) => {
// //       return user.getIdToken().then((idToken) => {
// //         const payload = { idToken, email, password };
// //         return axios
// //           .post("http://localhost:3001/sessionLogin", payload)
// //           .then(() => {
// //             return firebase.auth().signOut();
// //           })
// //           .catch((err) => {
// //             console.log(err);
// //           });
// //       });
// //     });
// // };

// export default app;
