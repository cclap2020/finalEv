import React from "react";
import { Redirect, useHistory } from "react-router";
import "./Register.css";

export default function Register(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isLoading,
    checkdata,
    emailInput,
    passwordInput,
    decideType,
    isAuth,
  } = props;

  const history = useHistory();

  decideType("register");
  if (isAuth) {
    <Redirect to="/private-page" />;
  }

  return (
    <div className="register">
      <header>
        <h1>Register</h1>
      </header>
      <form className="register__form">
        <input
          className="register__form__input"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={emailInput}
        />
        <input
          className="register__form__input"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={passwordInput}
        />
        <button className="register__form__submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
