import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Input from "../atoms/inputs/Input";
import Button from "../atoms/buttons/Button";
import {
  StyledForm,
  StyledFormRow,
  StyledFormError,
  StyledInput,
} from "../../App.styles";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3e5962;
  color: white;
  font-weight: bold;
`;

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
            <Input
              type="password"
              StyledInput={StyledInput}
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
            <Input
              type="password"
              StyledInput={StyledInput}
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
        <Button
          StyledButton={StyledButton}
          text="Submit"
          type="submit"
        />
      </StyledFormRow>
    </StyledForm>
  );
};

export default ResetPasswordForm;
