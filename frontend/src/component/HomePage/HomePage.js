import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import withTodoHOC from "../HOC/withTodoHOC";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";

const HomePage = () => {
  const EnchancedRegister = withTodoHOC(Register);
  const EnchancedSignIn = withTodoHOC(SignIn);

  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
