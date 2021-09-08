import { useEffect, useState } from "react";
import useAxiosFetch from "../customHook/useAxiosFetch";
import useAxiosPost from "../customHook/useAxiosPost";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const withTodoHOC = (WrappedComponent) => {
  let actionType = "register";

  const EnchancedComponent = (props) => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const dispatch = useDispatch();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [payload, setPayload] = useState();

    const userUID = useSelector((state) => state.userUID.userUID);

    const handleEmailChange = (e) => {
      console.log(e.target.value);
      setEmailInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
      console.log(e.target.value);
      setPasswordInput(e.target.value);
    };

    const decideType = (type) => {
      return (actionType = type);
    };

    const handleSubmit = (e) => {
      setPayload({
        email: emailInput,
        password: passwordInput,
      });
      console.log("withHOC payload Line 43: ", payload);
    };

    const checkdata = () => {
      console.log(userUID);
    };

    useEffect(() => {
      if (payload !== undefined) {
        console.log("useEffect updated: ", payload);
        const headers = { "Content-type": "application/json" };
        return axios
          .post(`http://localhost:3001/${actionType}`, payload, { headers })
          .then((res) => {
            dispatch({ type: "ISAUTH", isAuth: res.data.isAuth });
            dispatch({ type: "USERUID", userUID: res.data.userUID });
            console.log("before reset string");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return null;
      }
    }, [payload, dispatch]);

    //fetch should return
    const { data, isLoading, error } = useAxiosFetch(url);
    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        checkdata={checkdata}
        emailInput={emailInput}
        passwordInput={passwordInput}
        decideType={decideType}
      />
    );
  };

  return EnchancedComponent;
};

export default withTodoHOC;
