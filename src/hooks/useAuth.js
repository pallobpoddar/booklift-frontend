import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authInstance from "../utils/authInstance";
// import { addUserInfo } from "../redux/slices/userSlice";

const useAuth = () => {
	const [signinResponse, setSigninResponse] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signin = (formData) => {
		authInstance
			.post("/signin", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setSigninResponse(response.data);
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid email or password");
				}
			});
	};

	useEffect(() => {
		// dispatch(addUserInfo(signinResponse));
		signinResponse.data && navigate("/");
	}, [signinResponse]);

	const signup = (formData) => {
		authInstance
			.post("/signup", formData, {
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

	const forgotPassword = (formData) => {
		authInstance
			.post("/forgot-password", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				toast.success("An email has been sent to reset password");
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid credentials");
				}
			});
	};

	const resetPassword = (formData) => {
		authInstance
			.post("/reset-password", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				toast.success("Password has been reset successfully");
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid credentials");
				}
			});
	};

	return { signinResponse, signin, signup, forgotPassword, resetPassword };
};

export default useAuth;
