import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Input from "../atoms/inputs/Input";
import Button from "../atoms/buttons/Button";
import {
  StyledForm,
  StyledFormError,
  StyledInput,
  StyledButton,
} from "../../App.styles";

const SigninForm = () => {
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

  const { signin } = useAuth();

  const handlerOnSubmit = () => {
    const formData = {
      email: getValues("email"),
      password: getValues("password"),
    };
    signin(formData);
  };

  useEffect(() => {}, [errors]);

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
      <div>
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

        {errors.email && (
          <StyledFormError>{errors.email.message}</StyledFormError>
        )}
      </div>

      <div>
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
            <Input
              type="password"
              StyledInput={StyledInput}
              placeholder="Password"
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
      </div>

      <Button StyledButton={StyledButton} type="submit">
        {/* {loading ? <BeatLoader color="white" size={8} /> : "SIGN UP"} */}
        SIGN IN
      </Button>
    </StyledForm>
  );
};

export default SigninForm;
