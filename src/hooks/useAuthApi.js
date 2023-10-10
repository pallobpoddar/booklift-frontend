import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginInstance from "../utils/authInstance";

const useAuthApi = () => {
	const navigate = useNavigate();
	const [loginCredential, setLoginCredential] = useState({});
	const notify = () => toast("Hello, this is a toast notification!");
	const login = (formdata) => {
		loginInstance
			.post("/login", formdata, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setLoginCredential(response.data);
				if (response.data) {
					navigate("/");
				} else {
					<ToastContainer {...notify} />;
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return { loginCredential, login };
};

export default useAuthApi;
