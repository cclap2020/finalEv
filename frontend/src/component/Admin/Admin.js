import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { admin_userDataAction } from "../../redux/actions";
import AdminPage from "./AdminPage";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: "",
      adminPassword: "",
      payload: null,
      isAuth: false,
    };
  }
  handleOnChange = (e) => {
    if (e.target.id === "email") {
      this.setState({ adminEmail: e.target.value });
    } else if (e.target.id === "password") {
      this.setState({ adminPassword: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      payload: {
        adminEmail: this.state.adminEmail,
        adminPassword: this.state.adminPassword,
      },
    });
  };

  componentDidUpdate(prevState) {
    if (
      this.state.adminEmail !== "" &&
      this.state.adminEmail !== prevState.adminEmail &&
      this.state.payload !== null
    ) {
      console.log("inside api caall");
      axios
        .post("http://localhost:3001/admin-signin", this.state.payload)
        .then((res) => {
          this.props.admin_userDataDispatch(res.data.userData);
          this.setState({ isAuth: res.data.isAuth });

          //console.log(this.state.isAuth, this.state.userData);
          this.setState({ adminEmail: "", adminPassword: "" });
        });
    }
  }

  render() {
    if (this.state.isAuth) {
      <AdminPage />;
    } else {
      return (
        <div>
          <h1>Admin Page</h1>
          <form>
            <input
              id="email"
              placeholder="Email"
              value={this.state.adminEmail}
              onChange={this.handleOnChange}
            ></input>
            <input
              id="password"
              placeholder="Password"
              value={this.state.adminPassword}
              onChange={this.handleOnChange}
            ></input>
            <input type="submit" onClick={this.handleSubmit} />
          </form>
        </div>
      );
    }
  }
}

const __ = () => {
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    admin_userDataDispatch: (admin_userData) =>
      dispatch(admin_userDataAction(admin_userData)),
  };
};

export default connect(__, mapDispatchToProps)(Admin);
