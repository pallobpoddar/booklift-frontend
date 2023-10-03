import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useBookApi from "../../../hooks/useBookApi";
import "./SignupForm.scss";

const SignupForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		watch,
		setValue,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	// const { createPost } = useBookApi();

	const handlerOnSubmit = () => {
		const data = {
			firstName: getValues("firstName"),
			lastName: getValues("lastName"),
			email: getValues("email"),
			password: getValues("password"),
			confirmPassword: getValues("confirmPassword"),
		};

		const firstName = getValues("firstName");
		const lastName = getValues("lastName");

		setValue("name", `${firstName} ${lastName}`);

		console.log("The user data", data);

		// createPost(data);
	};

	useEffect(() => {
		console.log("Errors: ", errors);
	}, [errors]);

	return (
		<div>
			<div>
				<h1 className="header1">Sign Up</h1>
			</div>
			<div className="form">
				<form
					className="form-container"
					onSubmit={handleSubmit(handlerOnSubmit)}>
					<div className="form-row">
						<Controller
							name="firstName"
							control={control}
							rules={{
								required: "First name is required",
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
									placeholder="First name"
									{...field}
									style={{
										border: errors.firstName ? "1px solid red" : "",
									}}
								/>
							)}
						/>
					</div>

					<div className="error-message">
						{errors.firstName && <p>{errors.firstName.message}</p>}
					</div>

					<div className="form-row">
						<Controller
							name="lastName"
							control={control}
							rules={{
								required: "Last name is required",
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
									placeholder="Last name"
									{...field}
									style={{
										border: errors.lastName ? "1px solid red" : "",
									}}
								/>
							)}
						/>
					</div>

					<div className="error-message">
						{errors.lastName && <p>{errors.lastName.message}</p>}
					</div>

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
						<Controller
							name="confirmPassword"
							control={control}
							rules={{
								required: "Confirm password is required",
								validate: (value) =>
									value === watch("password") ||
									"Confirm password should match given password",
							}}
							render={({ field }) => (
								<input
									className="form-input"
									placeholder="Confirm password"
									type="password"
									{...field}
									style={{
										border: errors.confirmPassword ? "1px solid red" : "",
									}}
								/>
							)}
						/>
					</div>

					<div className="error-message">
						{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
					</div>

					<div className="form-row">
						<button
							className="form-row-button"
							type="submit">
							<Link
								to={"http://localhost:5173/"}
								className="link-remover">
								Sign up
							</Link>
						</button>
					</div>
					<div className="form-row">
						<p className="form-row-paragraph">
							Already a user?{" "}
							<Link
								to={"/user/signin"}
								className="link-style">
								Sign in
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
