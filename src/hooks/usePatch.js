import { useState } from "react";
import axios from "axios";

const usePatch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const patchData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch(url, payload);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, patchData };
};

export default usePatch;
