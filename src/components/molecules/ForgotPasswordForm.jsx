import { React, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import ValidationInput from "../atoms/inputs/ValidationInput";
import PrimaryButton from "../atoms/buttons/Button";
import {
  StyledForm,
  StyledFormRow,
  StyledFormError,
  StyledFormInput,
} from "../../App.styles";

const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { forgotPassword } = useAuth();

  const handlerOnSubmit = () => {
    const formData = {
      email: getValues("email"),
    };
    forgotPassword(formData);
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
        <PrimaryButton
          buttonStyle="primaryButton"
          text="Send email"
          type="submit"
        />
      </StyledFormRow>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
