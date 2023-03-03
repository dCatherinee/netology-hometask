import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const respData = await resp.json();
        setData(respData);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [{ data, isLoading, error }];
}
