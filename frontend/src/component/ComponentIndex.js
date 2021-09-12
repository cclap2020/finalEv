import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import withTodoHOC from "./HOC/withTodoHOC";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import PrivatePage from "./PrivatePage/PrivatePage";
import "./ComponentIndex.css";

// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Nav from "./Nav/Nav";

//import TodoList from "./TodoList/TodoList";

const EnchancedRegister = withTodoHOC(Register);
const EnchancedSignIn = withTodoHOC(SignIn);
//const EnchancedTodoList = withTodoHOC(TodoList);

const currentURL = window.location.pathname;

function ComponentIndex() {
  const isAuth = useSelector((state) => {
    return state.isAuth.isAuth;
  });
  return (
    <Router>
      {isAuth ? <Redirect to="private-page" /> : <Redirect to="/signin" />}
      {currentURL === "/" && <Redirect to="/signin" />}

      <Switch>
        <Route exact path="/" />
        <Route exact path="/register">
          <Nav />
          <EnchancedRegister />
        </Route>
        <Route exact path="/signin">
          <Nav />
          <EnchancedSignIn />
        </Route>
        <Route exact path="/private-page">
          <PrivatePage />
        </Route>
      </Switch>
    </Router>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.isAuth.isAuth,
//   };
// };

export default ComponentIndex;
