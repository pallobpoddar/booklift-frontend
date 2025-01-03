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
      return response.data;
    } catch (err) {
      setError(err.message || "An error occurred");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePost;
