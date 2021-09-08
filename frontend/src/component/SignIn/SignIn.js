import React from "react";
import { useSelector } from "react-redux";

export default function SignIn() {
  const signInEmail = useSelector((state) => state.signin.signInEmail);
  const signInPassword = useSelector((state) => state.signin.signInPassword);

  const handleSignInSubmit = (e) => {
    console.log(e);
  };

  console.log(signInEmail);

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button onClick={handleSignInSubmit}>Submit</button>
      </form>
    </div>
  );
}
