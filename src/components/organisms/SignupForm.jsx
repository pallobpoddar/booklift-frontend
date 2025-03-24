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

const SignupForm = ({ isLoading, onFormSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handlerOnSubmit = async () => {
    const formData = {
      name: getValues("name"),
      email: getValues("email"),
      password: getValues("password"),
    };

    onFormSubmit(formData);
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
            validate: (value) => value.trim() !== "" || "Name can't be empty",
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
              placeholder="Name"
              autocomplete={"name"}
              field={field}
              error={errors.name && true}
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
              StyledInput={StyledInput}
              placeholder="Email"
              autocomplete={"email"}
              field={field}
              error={errors.email && true}
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
                "Password must contain 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol",
            },
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
              placeholder="Password"
              type="password"
              autocomplete={"new-password"}
              includePasswordIcon={true}
              field={field}
              error={errors.password && true}
            />
          )}
        />

        {errors.password && (
          <StyledFormError>{errors.password.message}</StyledFormError>
        )}
      </div>

      <Button StyledButton={StyledButton}>
        {isLoading ? <BeatLoader color="white" size={8} /> : "SIGN UP"}
      </Button>
    </StyledForm>
  );
};

export default SignupForm;
