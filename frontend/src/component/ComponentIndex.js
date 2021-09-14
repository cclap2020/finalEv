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
import Nav from "./Nav/Nav";
import Admin from "./Admin/Admin";
import AdminPage from "./Admin/AdminPage/AdminPage";
import "./ComponentIndex.css";

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
      {currentURL === "/register" && <Redirect to="/register" />}
      {currentURL === "/admin" && <Redirect to="/admin" />}

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
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin-page">
          <AdminPage />
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
