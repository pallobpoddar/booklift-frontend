import { useForm, Controller } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { BeatLoader } from "react-spinners";
import {
  StyledForm,
  StyledFormError,
  StyledInput,
  StyledButton,
} from "../../App.styles";

const SigninForm = ({ isLoading, onFormSubmit }) => {
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

  const handlerOnSubmit = async () => {
    const formData = {
      email: getValues("email"),
      password: getValues("password"),
    };

    onFormSubmit(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
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
              message: "Character limit exceeded",
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
        {isLoading ? <BeatLoader color="white" size={8} /> : "SIGN IN"}
      </Button>
    </StyledForm>
  );
};

export default SigninForm;
