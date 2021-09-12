import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useAxiosPost = (url, data, dispatchPayload, actionType) => {
  const [body, setBody] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch;

  // actiontype will determine which one should use, example, singin or register
  useEffect(() => {
    if (actionType === "REGISTER")
      return axios
        .post(url, data, dispatchPayload)
        .then((res) => {
          dispatch({ type: "ISAUTH", isAuth: res.data.isAuth });
          dispatch({ type: "USERUID", userUID: res.data.userUID });
        })

        .catch((err) => {
          setError(err);
        });
  }, [url, data, dispatch, dispatchPayload, actionType]);

  return { data, error };
};

export default useAxiosPost;
