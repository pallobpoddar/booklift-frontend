import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import useAuthApi from "../../hooks/useAuthApi";
import { addUserInfo } from "../../redux/slices/userSlice";
import ValidationInput from "../atoms/inputs/ValidationInput";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import {
	StyledForm,
	StyledFormRow,
	StyledFormError,
	StyledFormInput,
} from "../../App.styles";

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
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters long",
						},
						maxLength: {
							value: 20,
							message: "Password is too long",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							type="text"
							StyledFormInput={StyledFormInput}
							placeholder="Password"
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
				<PrimaryButton
					buttonStyle="primaryButton"
					text="Sign in"
					to="/"
					linkStyle="link"
					type="submit"
				/>
			</StyledFormRow>
		</StyledForm>
	);
};

export default SigninForm;
