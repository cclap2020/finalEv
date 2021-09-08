import React from "react";

export default function Register(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    checkdata,
    emailInput,
    passwordInput,
    decideType,
  } = props;

  decideType("register");

  return (
    <div>
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

      <button onClick={checkdata}>Check-data</button>
    </div>
  );
}
