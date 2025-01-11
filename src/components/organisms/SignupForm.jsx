import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../atoms/inputs/Input";
import Button from "../atoms/buttons/Button";
import usePost from "../../hooks/usePost";
import { signupUrl } from "../../api/auths";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
  StyledForm,
  StyledFormError,
  StyledInput,
  StyledButton,
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

  const { data, error, loading, postData } = usePost(signupUrl);

  useEffect(() => {
    if (data) {
      toast.success(data.message, {
        autoClose: false,
        hideProgressBar: true,
        theme: "colored",
      });
    } else if (error) {
      toast.error(error.message, {
        theme: "colored",
      });
    }
  }, [data, error]);

  const handlerOnSubmit = async () => {
    const formData = {
      name: getValues("name"),
      email: getValues("email"),
      password: getValues("password"),
      confirmPassword: getValues("confirmPassword"),
    };
    await postData(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
      <div>
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
            <Input
              type="text"
              StyledInput={StyledInput}
              placeholder="Name"
              autoFocus
              field={field}
              style={{
                border: errors.name ? "1px solid red" : "",
              }}
            />
          )}
        />

        {errors.name && (
          <StyledFormError>{errors.name.message}</StyledFormError>
        )}
      </div>

      <div>
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
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Character limit exceeded",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])[A-Za-z\d~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,20}$/,
              message:
                "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol",
            },
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
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
      </div>

      <div>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords don't match",
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
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
      </div>

      <Button StyledButton={StyledButton} type="submit">
        {loading ? <BeatLoader color="white" size={8} /> : "SIGN UP"}
      </Button>
    </StyledForm>
  );
};

export default SignupForm;
