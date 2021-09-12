import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signOutAction } from "../../redux/actions";
//sign out should makea post request to the server to change isAuth to false
//and chnage userUid to an empty string

// change isAuth and userUId in the frontend.

class SignOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wipeEmail: "",
      wipeUserUid: "",
      changeAuth: false,
      wipeTodoList: [],
    };
  }

  checkData = () => {
    console.log(this.props.email);
    console.log("test");
    this.props.signOutAction(
      this.state.wipeUserUid,
      this.state.wipeEmail,
      this.state.changeAuth,
      this.state.wipeTodoList
    );
    console.log("after");
    console.log(this.props.email);
  };

  onSginOutBTN = () => {
    console.log("clicked");
    this.props.signOutAction(
      this.state.wipeUserUid,
      this.state.wipeEmail,
      this.state.changeAuth,
      this.state.wipeTodoList
    );
    this.props.history.push("/signin");
  };

  // this.props.signOutAction(
  //         this.props.wipeUserUid,
  //         this.props.wipeEmail,
  //         this.props.changeAuth,
  //         this.props.wipeTodoList
  //       )

  render() {
    return <button onClick={this.onSginOutBTN}>Sign Out</button>;
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email.email,
    userUid: state.userUid.userUid,
    isAuth: state.isAuth.isAuth,
    todoList: state.todoList.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: (userUid, email, isAuth, todoList) =>
      dispatch(signOutAction(userUid, email, isAuth, todoList)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignOut)
);
