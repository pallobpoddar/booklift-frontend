import { React, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import ValidationInput from "../atoms/inputs/ValidationInput";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

import {
	StyledForm,
	StyledFormRow,
	StyledFormError,
	StyledFormInput,
} from "../../App.styles";

const SignupForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		watch,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
			name: "",
			phone: "",
			birthday: "",
			gender: "",
		},
	});

	const { signup } = useAuth();

	const handlerOnSubmit = () => {
		const formData = {
			email: getValues("email"),
			password: getValues("password"),
			confirmPassword: getValues("confirmPassword"),
			name: getValues("name"),
			phone: getValues("phone"),
			birthday: getValues("birthday"),
			gender: getValues("gender"),
		};
		signup(formData);
	};

	useEffect(() => {}, [errors]);

	return (
		<StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
			<StyledFormRow>
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
							StyledFormInput={StyledFormInput}
							placeholder="Email"
							field={field}
							style={{
								border: errors.email ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.email && <p>{errors.email.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="password"
					control={control}
					rules={{
						required: "Password is required",
						maxLength: {
							value: 20,
							message: "Password is too long",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							StyledFormInput={StyledFormInput}
							placeholder="Password"
							type="password"
							field={field}
							style={{
								border: errors.password ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.password && <p>{errors.password.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="confirmPassword"
					control={control}
					rules={{
						required: "Confirm password is required",
						validate: (value) =>
							value === watch("password") ||
							"Confirm password must match given password",
					}}
					render={({ field }) => (
						<ValidationInput
							StyledFormInput={StyledFormInput}
							placeholder="Confirm password"
							type="password"
							field={field}
							style={{
								border: errors.confirmPassword ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="name"
					control={control}
					rules={{
						required: "Name is required",
						maxLength: {
							value: 30,
							message: "Name is too long",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							type="text"
							StyledFormInput={StyledFormInput}
							placeholder="Name"
							field={field}
							style={{
								border: errors.name ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.name && <p>{errors.name.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="phone"
					control={control}
					rules={{
						required: "Phone number is required",
						minLength: {
							value: 11,
							message: "Phone number is not valid",
						},
						maxLength: {
							value: 14,
							message: "Phone number is too long",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							StyledFormInput={StyledFormInput}
							type="text"
							placeholder="Phone"
							field={field}
							style={{
								border: errors.phone ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.phone && <p>{errors.phone.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="birthday"
					control={control}
					rules={{
						maxLength: {
							value: 11,
							message: "Birthday is not valid",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							StyledFormInput={StyledFormInput}
							type="text"
							placeholder="Birthday"
							field={field}
							style={{
								border: errors.birthday ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.birthday && <p>{errors.birthday.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="gender"
					control={control}
					rules={{
						maxLength: {
							value: 10,
							message: "Gender is not valid",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							StyledFormInput={StyledFormInput}
							type="text"
							placeholder="Gender"
							field={field}
							style={{
								border: errors.gender ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.gender && <p>{errors.gender.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<PrimaryButton
					buttonStyle="primaryButton"
					text="Sign up"
					type="submit"
				/>
			</StyledFormRow>
		</StyledForm>
	);
};

export default SignupForm;
