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
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3e5962;
  color: white;
  font-weight: bold;
`;

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
            <Input
              type="text"
              StyledInput={StyledInput}
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
        <Button
          StyledButton={StyledButton}
          text="Send email"
          type="submit"
        />
      </StyledFormRow>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
