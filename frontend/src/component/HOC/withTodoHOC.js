import { useEffect, useState } from "react";
import useAxiosFetch from "../customHook/useAxiosFetch";
import useAxiosPost from "../customHook/useAxiosPost";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const withTodoHOC = (WrappedComponent) => {
  let actionType = "register";

  const EnchancedComponent = (props) => {
    const baseUrl = "http://localhost:3001";

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
      e.preventDefault();
      setPayload({
        email: emailInput,
        password: passwordInput,
      });
      //console.log("withHOC payload Line 43: ", payload);
    };

    const checkdata = () => {
      console.log(userUID);
    };

    useEffect(() => {
      if (payload !== undefined && actionType === "register") {
        console.log("useEffect register updated: ", payload);
        // const headers = {
        //   Accept: "application/json",
        //   "Content-type": "application/json",
        // };
        // return fetch(`http://localhost:3001/${actionType}`)
        //   .then((data) => data.json())
        //   .then(res => {console.log(res);});

        axios
          .post(`http://localhost:3001/${actionType}`, payload)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            dispatch({ type: "ISAUTH", isAuth: res.data.isAuth });
            dispatch({ type: "USERUID", userUID: res.data.userUID });
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (payload !== undefined && actionType === "signin") {
        console.log("useEffect signin updated: ", payload);

        //native fetch method
        // const requestOptions = {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // };
        // fetch(`http://localhost:3001/${actionType}`, requestOptions)
        //   .then((response) => response.json())
        //   .then((data) => console.log(data));
        //axios
        const headers = { "Content-type": "application/json" };
        axios
          .post(`http://localhost:3001/${actionType}`, payload, headers)
          .then((res) => {
            console.log("signing res received: ", res.data);
            dispatch({ type: "ISAUTH", isAuth: res.data.isAuth });
            dispatch({ type: "USERUID", userUID: res.data.userUID });
          })
          .catch((err) => {
            console.log(err);
          });
        //make a get request
      } else {
        return null;
      }
    }, [payload, dispatch]);

    //this one is meaningless for now
    const { data, isLoading, error } = useAxiosFetch();
    //const getAuth = useAxiosFetch(baseUrl, "api/auth");
    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        //getAuth={getAuth}
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
