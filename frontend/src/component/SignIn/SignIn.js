import React from "react";
import { Redirect } from "react-router-dom";

export default function SignIn(props) {
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

  decideType("signin");
  if (isAuth) {
    <Redirect to="/private-page" />;
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input
          placeholder="Email"
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button onClick={checkdata}>check-userUID</button>
    </div>
  );
}
