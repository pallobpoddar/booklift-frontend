import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ValidationInput from "../atoms/inputs/ValidationInput";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import usePost from "../../hooks/usePost";
import { signupUrl } from "../../api/auths";

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
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const {data, error, loading, postData} = usePost(signupUrl);

	const handlerOnSubmit = () => {
		const formData = {
			name: getValues("name"),
			email: getValues("email"),
			password: getValues("password"),
			confirmPassword: getValues("confirmPassword"),
		};
		postData(formData);
	};

	useEffect(() => {}, [errors]);

	return (
		<StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
			<StyledFormRow>
				<Controller
					name="name"
					control={control}
					rules={{
						required: "Name is required",
						maxLength: {
							value: 100,
							message: "Character limit exceeded",
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
							value: 50,
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
