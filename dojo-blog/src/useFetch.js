import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(error.message);
          }
        });
      setisLoading(false);
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
