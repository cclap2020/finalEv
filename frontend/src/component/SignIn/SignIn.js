import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const signInEmail = useSelector((state) => state.signin.signInEmail);
  const signInPassword = useSelector((state) => state.signin.signInPassword);

  const handleEmailChange = (e) => {
    setEmailInput(e.targer.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.targer.value);
  };

  const handleSignInSubmit = (e) => {};

  console.log(signInEmail);

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
        <button onClick={handleSignInSubmit}>Submit</button>
      </form>
    </div>
  );
}
