import React, { useState, useEffect, useRef } from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const timestampRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (timestampRef.current === timestamp) {
          const data = await response.json();
          setData(data);
        }
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return ()=> setData(null);
  }, [url]);

  return [data, loading, error];
}

export default useJsonFetch;
