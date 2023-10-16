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
import { useParams } from "react-router-dom";

const ResetPasswordForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	});

	const { resetPassword } = useAuth();
	const { token, id } = useParams();

	const handlerOnSubmit = () => {
		const formData = {
			token: token,
			id: id,
			newPassword: getValues("newPassword"),
			confirmPassword: getValues("confirmPassword"),
		};
		resetPassword(formData);
	};

	useEffect(() => {}, [errors]);
	return (
		<StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
			<StyledFormRow>
				<Controller
					name="newPassword"
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
							type="password"
							StyledFormInput={StyledFormInput}
							placeholder="New Password"
							field={field}
							style={{
								border: errors.newPassword ? "1px solid red" : "",
							}}
						/>
					)}
				/>
			</StyledFormRow>

			<StyledFormError>
				{errors.newPassword && <p>{errors.newPassword.message}</p>}
			</StyledFormError>

			<StyledFormRow>
				<Controller
					name="confirmPassword"
					control={control}
					rules={{
						required: "Confirm password is required",
						maxLength: {
							value: 20,
							message: "Confirm password is too long",
						},
					}}
					render={({ field }) => (
						<ValidationInput
							type="password"
							StyledFormInput={StyledFormInput}
							placeholder="Confirm Password"
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
					text="Submit"
					type="submit"
				/>
			</StyledFormRow>
		</StyledForm>
	);
};

export default ResetPasswordForm;
