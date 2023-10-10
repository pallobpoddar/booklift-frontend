import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginInstance from "../utils/authInstance";
import { addUserInfo } from "../redux/slices/userSlice";

const useAuth = () => {
	const [loginResponse, setLoginResponse] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const login = (formdata) => {
		loginInstance
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

	dispatch(addUserInfo(formData));

	useEffect(() => {
		loginResponse.data && navigate("/");
	}, [loginResponse]);

	return { loginResponse, login };
};

export default useAuth;
