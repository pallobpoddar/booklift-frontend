import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import useAuthApi from "../../hooks/useAuthApi";
import { addUserInfo } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";
import Header1 from "../atoms/labels/Header1";
import "../../App.scss";
import "./SigninForm.scss";
import ValidationInput from "../atoms/inputs/ValidationInput";

const SigninForm = () => {
	const dispatch = useDispatch();

	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { login } = useAuthApi();

	const handlerOnSubmit = () => {
		const data = {
			email: getValues("email"),
			password: getValues("password"),
		};

		login(data);
		dispatch(addUserInfo(data));
	};

	useEffect(() => {
		console.log("Errors: ", errors);
	}, [errors]);

	return (
		<div>
			<Header1 header1Style="header1" text="Sign In" />
			<form className="form" onSubmit={handleSubmit(handlerOnSubmit)}>
				<div className="form-row">
					<Controller
						name="email"
						control={control}
						rules={{
							required: "Email is required",
							maxLength: {
								value: 64,
								message: "Email is not valid",
							},
						}}
						render={({ field }) => (
							<ValidationInput
								type="text"
								inputStyle="form-input"
								placeholder="Email"
								field={field}
								style={{
									border: errors.email ? "1px solid red" : "",
								}}
							/>
						)}
					/>
				</div>

				<div className="error-message">
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div className="form-row">
					<Controller
						name="password"
						control={control}
						rules={{
							required: "Password is required",
							minLength: {
								value: 8,
								message:
									"Password must be at least 8 characters long",
							},
							maxLength: {
								value: 20,
								message: "Password is too long",
							},
						}}
						render={({ field }) => (
							<input
								className="form-input"
								placeholder="Password"
								type="password"
								{...field}
								style={{
									border: errors.password
										? "1px solid red"
										: "",
								}}
							/>
						)}
					/>
				</div>

				<div className="error-message">
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<div className="form-row">
					<button className="form-row-button" type="submit">
						Sign in
					</button>
				</div>
				<div className="form-row">
					<p className="form-row-paragraph">
						Don't have an account?{" "}
						<Link to={"/user/signup"} className="link-style">
							Create one
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SigninForm;
