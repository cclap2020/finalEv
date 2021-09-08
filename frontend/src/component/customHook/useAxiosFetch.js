import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useAxiosFetch;
