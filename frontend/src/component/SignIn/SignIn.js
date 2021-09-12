import React from "react";
import { Redirect } from "react-router-dom";
import "./SignIn.css";

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
    <div className="signin">
      <header>
        <h1>Sign In</h1>
      </header>
      <form className="signin__form">
        <input
          className="signin__form__input"
          placeholder="Email"
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          className="signin__form__input"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <button className="signin__form__submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
