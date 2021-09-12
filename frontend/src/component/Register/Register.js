import React from "react";
import { Redirect } from "react-router";

export default function Register(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    checkdata,
    emailInput,
    passwordInput,
    decideType,
    isAuth,
  } = props;

  decideType("register");
  if (isAuth) {
    <Redirect to="/private-page" />;
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={emailInput}
        />
        <input
          placeholder="Password"
          onChange={handlePasswordChange}
          value={passwordInput}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
