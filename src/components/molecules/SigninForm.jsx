import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuthApi from "../../hooks/useAuthApi";
import { useDispatch } from "react-redux";
import "./SigninForm.scss";
import "../../App.scss";
import { addUserInfo } from "../../redux/slices/userSlice";

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
			<div>
				<h1 className="header1">Sign In</h1>
			</div>
			<form
				className="form"
				onSubmit={handleSubmit(handlerOnSubmit)}>
				<div className="form-row">
					<Controller
						name="email"
						control={control}
						rules={{
							required: "Email is required",
							minLength: {
								value: 6,
								message: "Minimum length must be 6",
							},
							maxLength: {
								value: 50,
								message: "Minimum length must be 20",
							},
						}}
						render={({ field }) => (
							<input
								className="form-input"
								placeholder="Email"
								{...field}
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
								value: 6,
								message: "Minimum length must be 6",
							},
							maxLength: {
								value: 50,
								message: "Minimum length must be 20",
							},
						}}
						render={({ field }) => (
							<input
								className="form-input"
								placeholder="Password"
								type="password"
								{...field}
								style={{
									border: errors.password ? "1px solid red" : "",
								}}
							/>
						)}
					/>
				</div>

				<div className="error-message">
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<div className="form-row">
					<button
						className="form-row-button"
						type="submit">
						Sign in
					</button>
				</div>
				<div className="form-row">
					<p className="form-row-paragraph">
						Don't have an account?{" "}
						<Link
							to={"/user/signup"}
							className="link-style">
							Create one
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SigninForm;
