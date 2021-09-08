import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export default function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [payload, setPayload] = useState({});

  const dispatch = useDispatch();
  const userUID = useSelector((state) => state.userUID.userUID);

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return setPayload({
      email: emailValue,
      password: passwordValue,
    });
  };

  const checkdata = () => {
    console.log(userUID);
  };

  useEffect(() => {
    console.log("updated", payload);
    const headers = { "Content-type": "application/json" };

    return axios
      .post("http://localhost:3001/api/register", payload, { headers })
      .then((res) => {
        dispatch({ type: "ISAUTH", isAuth: res.data.isAuth });
        dispatch({ type: "USERUID", userUID: res.data.userUID });
        setPasswordValue("");
        setEmailValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [payload, dispatch]);

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
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>

      <button onClick={checkdata}>Check-data</button>
    </div>
  );
}
