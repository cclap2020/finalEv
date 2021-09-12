import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useAxiosFetch = (baseUrl, userUid) => {
  //const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get([baseUrl, userUid].join("/"))
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [baseUrl, userUid]);

  return { data, isLoading, error };
};

export default useAxiosFetch;
