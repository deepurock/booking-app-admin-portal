import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let user = JSON.parse(localStorage.getItem("user")) || null;
      const config = {
        headers: {
          access_token: user.access_token,
        },
      };
      setLoading(true);
      try {
        const res = await axios.get(url, config);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    let user = JSON.parse(localStorage.getItem("user")) || null;
    const config = {
      headers: {
        access_token: user.access_token,
      },
    };
    setLoading(true);
    try {
      const res = await axios.get(url, config);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};
export default useFetch;
