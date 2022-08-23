import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const response = await fetch(options.url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      };
      getData();
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [options.url]);

  return {
    data,
    loading,
    error,
  };
};
