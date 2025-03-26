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

const ForgotPasswordForm = ({ isLoading, onFormSubmit }) => {
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

  const handlerOnSubmit = () => {
    const formData = {
      email: getValues("email"),
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
            pattern: {
              value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
              placeholder="Enter your email"
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

      <Button StyledButton={StyledButton}>
        {isLoading ? <BeatLoader color="white" size={8} /> : "Submit"}
      </Button>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
