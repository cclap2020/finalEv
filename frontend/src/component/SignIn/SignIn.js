import React from "react";

export default function SignIn(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    checkdata,
    emailInput,
    passwordInput,
    decideType,
    getAuth,
  } = props;

  decideType("signin");

  const checkConsole = () => {
    console.log(getAuth);
  };

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
      <button onClick={checkConsole}>check-userUID</button>
    </div>
  );
}
