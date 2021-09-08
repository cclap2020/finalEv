import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import withTodoHOC from "./HOC/withTodoHOC";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";

const EnchancedRegister = withTodoHOC(Register);
const EnchancedSignIn = withTodoHOC(SignIn);

export default class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/register">
            <EnchancedRegister />
          </Route>
          <Route path="/signin">
            <EnchancedSignIn />
          </Route>
        </Switch>
      </Router>
    );
  }
}
