import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, payload);
      setData(response.data);
    } catch (err) {
      setError(err.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePost;
