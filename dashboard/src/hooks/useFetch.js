import { useState, useEffect } from 'react';

function useFetch(url) {
  const [result, setResult] = useState({ url: null, data: null, error: null });

  useEffect(() => {
    let cancelled = false; // ignore results from a stale request

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setResult({ url, data: json, error: null });
      })
      .catch((err) => {
        if (!cancelled) setResult({ url, data: null, error: err });
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  // Loading until we have a result for the current url
  const loading = result.url !== url;

  return {
    data: loading ? null : result.data,
    loading,
    error: loading ? null : result.error,
  };
}

export default useFetch;