import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import withTodoHOC from "./HOC/withTodoHOC";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import PrivatePage from "./PrivatePage/PrivatePage";

// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import HomePage from "./HomePage/HomePage";

//import TodoList from "./TodoList/TodoList";

const EnchancedRegister = withTodoHOC(Register);
const EnchancedSignIn = withTodoHOC(SignIn);
//const EnchancedTodoList = withTodoHOC(TodoList);

function Index() {
  const isAuth = useSelector((state) => {
    return state.isAuth.isAuth;
  });
  return (
    <Router>
      {isAuth ? <Redirect to="private-page" /> : <HomePage />}

      <Switch>
        <Route exact path="/" />
        <Route exact path="/register">
          <EnchancedRegister />
        </Route>
        <Route exact path="/signin">
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

export default Index;
