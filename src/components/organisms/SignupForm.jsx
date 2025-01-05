import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ValidationInput from "../atoms/inputs/ValidationInput";
import Button from "../atoms/buttons/Button";
import usePost from "../../hooks/usePost";
import { signupUrl } from "../../api/auths";
import styled from "styled-components";

import { StyledForm, StyledFormError, StyledFormInput } from "../../App.styles";

const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: #3e5962;
	color: white;
	font-weight: bold;
`

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

  const { data, error, loading, postData } = usePost(signupUrl);

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

      {errors.name && <StyledFormError>{errors.name.message}</StyledFormError>}

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          maxLength: {
            value: 320,
            message: "Invalid email format",
          },
          pattern: {
            value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",
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

      {errors.email && (
        <StyledFormError>{errors.email.message}</StyledFormError>
      )}

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          maxLength: {
            value: 50,
            message: "Character limit exceeded",
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

      {errors.password && (
        <StyledFormError>{errors.password.message}</StyledFormError>
      )}

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Confirm password is required",
          validate: (value) =>
            value === watch("password") || "Passwords don't match",
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

      {errors.confirmPassword && (
        <StyledFormError>{errors.confirmPassword.message}</StyledFormError>
      )}

      <Button StyledButton={StyledButton} text="Sign Up" type="submit" />
    </StyledForm>
  );
};

export default SignupForm;
