import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import withTodoHOC from "./HOC/withTodoHOC";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import TodoList from "./TodoList/TodoList";

const EnchancedRegister = withTodoHOC(Register);
const EnchancedSignIn = withTodoHOC(SignIn);
const EnchancedTodoList = withTodoHOC(TodoList);

class Index extends React.Component {
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


const mapStateToProps = (state) => ({

})



export default Index