import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authInstance from "../utils/authInstance";
import { addUserInfo } from "../redux/slices/userSlice";

const useAuth = () => {
	const [loginResponse, setLoginResponse] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const login = (formdata) => {
		authInstance
			.post("/login", formdata, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setLoginResponse(response.data);
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid email or password");
				}
			});
	};

	useEffect(() => {
		dispatch(addUserInfo(loginResponse));
		loginResponse.data && navigate("/");
	}, [loginResponse]);

	const signup = (formdata) => {
		authInstance
			.post("signup", formdata, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				navigate("/user/signin");
				toast.success("You need to sign in now");
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid credentials");
				}
			});
	};

	return { loginResponse, login, signup };
};

export default useAuth;
