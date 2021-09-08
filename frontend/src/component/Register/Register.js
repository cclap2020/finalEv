import React from "react";

export default function Register(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    checkdata,
    emailValue,
    passwordValue,
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
          value={emailValue}
        />
        <input
          placeholder="Password"
          onChange={handlePasswordChange}
          value={passwordValue}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button onClick={checkdata}>Check-data</button>
    </div>
  );
}
