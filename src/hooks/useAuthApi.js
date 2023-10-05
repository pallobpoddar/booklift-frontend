import { useState, useEffect } from "react";
import authInstance from "../utils/authInstance";

const useAuthApi = () => {
	// const [loginCredential, setLoginCredential] = useState([]);
	const [loading, setLoading] = useState(false);

	const login = (formdata) => {
		authInstance
			.post("/login", formdata, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const data = response.data.data;
				console.log(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return { login };
};

export default useAuthApi;
