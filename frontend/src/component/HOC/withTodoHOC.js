import { useEffect, useState } from "react";
import useAxiosFetch from "../customHook/useAxiosFetch";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  isAuthAction,
  userUidAction,
  storeEmailAction,
} from "../../redux/actions";

const withTodoHOC = (WrappedComponent) => {
  let actionType = "register";

  const EnchancedComponent = (props) => {
    const baseUrl = "http://localhost:3001";
    const userUid = useSelector((state) => state.userUid.userUid);
    const isAuth = useSelector((state) => state.isAuth.isAuth);
    const dispatch = useDispatch();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [addTodoInput, setAddTodoInput] = useState("");
    const [payload, setPayload] = useState();

    const handleEmailChange = (e) => {
      //console.log(e.target.value);
      setEmailInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
      //console.log(e.target.value);
      setPasswordInput(e.target.value);
    };

    const handleAddToDoInputChange = (e) => {
      console.log(e.target.value);
      setAddTodoInput(e.target.value);
    };

    const decideType = (type) => {
      return (actionType = type);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setPayload({
        email: emailInput,
        password: passwordInput,
        addTDD: addTodoInput,
      });
      //console.log("withHOC payload Line 43: ", payload);
    };

    const checkdata = () => {
      console.log(userUid);
    };

    useEffect(() => {
      if (payload !== undefined && actionType === "register") {
        console.log("useEffect register updated: ", payload);
        dispatch(storeEmailAction(payload));
        axios
          .post(`http://localhost:3001/${actionType}`, payload)
          .then((res) => {
            dispatch(isAuthAction(res.data.isAuth));
            dispatch(userUidAction(res.data.userUid));
            //console.log(isAuth);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (payload !== undefined && actionType === "signin") {
        console.log("useEffect signin updated: ", payload);
        dispatch(storeEmailAction(payload.email));
        //axios

        axios
          .post(`http://localhost:3001/${actionType}`, payload)
          .then((res) => {
            console.log("signing res received: ", res.data);

            dispatch(isAuthAction(res.data.isAuth));
            dispatch(userUidAction(res.data.userUid));
          })
          .catch((err) => {
            console.log(err);
          });

        //native fetch method
        // const requestOptions = {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // };
        // fetch(`http://localhost:3001/${actionType}`, requestOptions)
        //   .then((response) => response.json())
        //   .then((data) => console.log(data));

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
        isAuth={isAuth}
        userUid={userUid}
        //getAuth={getAuth}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleAddToDoInputChange={handleAddToDoInputChange}
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
