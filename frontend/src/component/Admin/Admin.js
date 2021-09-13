import axios from "axios";
import React from "react";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: "",
      adminPassword: "",
      payload: null,
      userData: null,
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
        .then((data) => {
          console.log(data);
          // this.setState({ userData: { data } }

          return (this.setState = { adminEmail: "", adminPassword: "" });
        });
    }
  }

  render() {
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

export default Admin;
